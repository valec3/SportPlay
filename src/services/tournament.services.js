import { pool } from '../db/index.js';
import { uploadImage } from '../lib/cloudinary.js';
import fs from 'fs-extra';

export const newTournamentService = async (
    tournamentData,
    tournamentImage,
    creatorId,
) => {
    try {
        const { name, players_count, teams_count, type_tournament } =
            tournamentData;
        if (!creatorId)
            throw new Error('El ID del creador no puede estar vacío.');
        if (!name || !players_count || !teams_count || !type_tournament)
            throw new Error('Todos los campos son requeridos.');
        let logo = null;
        if (tournamentImage) {
            const result = await uploadImage(tournamentImage.tempFilePath);
            logo = result.secure_url;

            await fs.unlink(tournamentImage.tempFilePath);
        }

        const query = `
        INSERT INTO tournament (logo, name, players_count, teams_count, type_tournament, creator_id)
        VALUES (?, ?, ?, ?, ?, ?)
        `;

        const result = await pool.query(query, [
            logo,
            name,
            players_count,
            teams_count,
            type_tournament,
            creatorId,
        ]);

        return result;
    } catch (error) {
        console.error('Error al crear el torneo:', error);
        throw new Error('Error interno del servidor');
    }
};

export const getTournamentsBycreatorIdService = async (creator_id) => {
    try {
        if (!creator_id) {
            throw new Error('El ID del creador no puede estar vacío.');
        }
        const query = `
            SELECT * FROM tournament
            WHERE creator_id = ?
        `;
        const result = await pool.query(query, [creator_id]);

        return result;
    } catch (error) {
        console.error('Error al consultar los torneos del usuario:', error);
        throw new Error('Error interno del servidor');
    }
};

export const getAllTournamentsService = async () => {
    try {
        const query = 'SELECT * FROM tournament';
        const tournaments = await pool.query(query);

        return tournaments;
    } catch (error) {
        console.error('Error al obtener los torneos:', error);
        throw new Error('Error interno del servidor');
    }
};

export const getTournamentsByUserIdService = async (userId, res) => {
    try {
        if (!userId) {
            throw new Error('El ID del usuario no puede estar vacío.');
        }
        const query = `
            SELECT * FROM tournament
            WHERE creator_id = ?
        `;
        const myTournaments = await pool.query(query, [userId]);

        return myTournaments;
    } catch (error) {
        console.error('Error al consultar los torneos del usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const closeTournamentService = async (tournamentId) => {
    try {
        if (!tournamentId) {
            throw new Error('El ID del torneo no puede estar vacío.');
        }
        const query = `
            UPDATE tournament
            SET finished = true
            WHERE id = ?
        `;
        const result = await pool.query(query, [tournamentId]);

        return result;
    } catch (error) {
        console.error('Error al cerrar el torneo:', error);
        throw new Error('Error interno del servidor');
    }
};

export const getAllTeamsPerTournamentService = async () => {
    try {
        const query = 'SELECT * FROM tournament_teams';
        const tournament_teams = await pool.query(query);

        return tournament_teams;
    } catch (error) {
        console.error('Error al obtener los equipos del torneo:', error);
        throw new Error('Error interno del servidor');
    }
};

export const getTeamsPerTournamentService = async (tournamentId) => {
    try {
        if (!tournamentId) {
            throw new Error('El ID del torneo no puede estar vacío.');
        }

        const teamsQuery = `SELECT team_id FROM tournament_teams WHERE tournament_id = ?`;
        const teamsResult = await pool.query(teamsQuery, [tournamentId]);
        const teamIds = teamsResult[0].map((row) => row.team_id);

        if (teamIds.length === 0) {
            return { total_teams: 0, teams: [] };
        }

        const teamsDataQuery = `SELECT id, name, logo_url FROM teams WHERE id IN (?)`;
        const teamsDataResult = await pool.query(teamsDataQuery, [teamIds]);
        const teams = teamsDataResult[0];

        const totalTeams = teams.length;

        return { total_teams: totalTeams, teams: teams };
    } catch (error) {
        console.error('Error al obtener los equipos del torneo:', error);
        throw new Error('Error interno del servidor');
    }
};

export const indexTeamToTournamentService = async (data, logoImage) => {
    try {
        if (!data.tournament_id) {
            throw new Error(
                'El ID del torneo proporcionado no puede estar vacío.',
            );
        }

        let teamId;

        if (!data.team_id) {
            let logo_url = null;
            if (logoImage) {
                const result = await uploadImage(logoImage.tempFilePath);
                logo_url = result.secure_url;
                await fs.unlink(logoImage.tempFilePath);
            }
            const insertTeamQuery = `INSERT INTO teams (creator_id, name, logo_url) VALUES (?, ?, ?)`;
            const [results] = await pool.query(insertTeamQuery, [
                data.creator_id,
                data.name,
                logo_url,
            ]);
            teamId = results.insertId;
            console.log('Id del nuevo equipo: ', teamId);

            const tournamentTeamQuery = `SELECT * FROM tournament_teams WHERE team_id = ? AND tournament_id = ?`;
            const [tournamentTeamResult] = await pool.query(
                tournamentTeamQuery,
                [teamId, data.tournament_id],
            );

            if (tournamentTeamResult.length > 0) {
                const message = 'El equipo ya está asociado a este torneo.';
                return { message };
            }

            const query = `INSERT INTO tournament_teams (team_id, tournament_id) VALUES (?, ?)`;
            await pool.query(query, [teamId, data.tournament_id]);

            return {
                teamId,
                message: 'Equipo creado y agregado al torneo exitosamente',
            };
        } else {
            teamId = data.team_id;

            const tournamentTeamQuery = `SELECT * FROM tournament_teams WHERE team_id = ? AND tournament_id = ?`;
            const [tournamentTeamResult] = await pool.query(
                tournamentTeamQuery,
                [teamId, data.tournament_id],
            );

            if (tournamentTeamResult.length > 0) {
                const message = 'El equipo ya está asociado a este torneo.';
                return { message };
            }

            // Validar si el equipo existe en la tabla de equipos
            const teamExistsQuery = `SELECT id FROM teams WHERE id = ?`;
            const [teamExistsResult] = await pool.query(teamExistsQuery, [
                teamId,
            ]);

            if (teamExistsResult.length === 0) {
                throw new Error('El ID del equipo proporcionado no existe.');
            }

            const tournamentExistsQuery = `SELECT id FROM tournament WHERE id = ?`;
            const [tournamentExistsResult] = await pool.query(
                tournamentExistsQuery,
                [data.tournament_id],
            );

            if (tournamentExistsResult.length === 0) {
                throw new Error('El ID del torneo proporcionado no existe.');
            }

            const query = `INSERT INTO tournament_teams (team_id, tournament_id) VALUES (?, ?)`;
            await pool.query(query, [teamId, data.tournament_id]);

            return { teamId, message: 'Equipo asignado correctamente' };
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteTeamPerTournamentService = async (data) => {
    try {
        if (!data.tournament_id || !data.team_id) {
            throw new Error(
                'El ID del torneo o del equipo no pueden estar vacíos.',
            );
        }

        const query = `DELETE FROM tournament_teams WHERE tournament_id = ? AND team_id = ?`;
        await pool.query(query, [data.tournament_id, data.team_id]);

        return { message: 'Equipo eliminado correctamente' };
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getStatsTournamentService = async (id) => {
    const query = `
            SELECT * FROM game_team_stats
            WHERE game_id IN (SELECT id FROM games WHERE tournament_id = ?)`;
    const result = await pool.query(query, [id]);
    return result;
};

export const getInfoTournamentService = async (id) => {
    const query = `
            SELECT * FROM tournament
            WHERE id = ?`;
    const [result] = await pool.query(query, [id]);
    return result;
};
