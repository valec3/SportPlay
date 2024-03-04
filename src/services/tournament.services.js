import { pool } from '../db/index.js';
import { uploadImage } from '../lib/cloudinary.js';
import fs from 'fs-extra'

export const newTournamentService = async (tournamentData, tournamentImage, creatorId) => {
    try {
        const { name, players_count, teams_count, type_tournament } = tournamentData;

        let logo = null;
        if (tournamentImage) {
            const result = await uploadImage(tournamentImage.tempFilePath);
            logo = result.secure_url;

            await fs.unlink(tournamentImage.tempFilePath)
        }

        const query = `
        INSERT INTO tournament (logo, name, players_count, teams_count, type_tournament, creator_id)
        VALUES (?, ?, ?, ?, ?, ?)
        `;

        const result = await pool.query(query, [logo, name, players_count, teams_count, type_tournament, creatorId]);

        return result;
    } catch (error) {
        console.error('Error al crear el torneo:', error);
        throw new Error('Error interno del servidor');
    }
};

export const getTournamentsBycreatorIdService = async (creator_id) => {
    try {

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
}

export const getTournamentTeamsService = async () => {
    try {
        const query = 'SELECT * FROM tournament_teams';
        const tournament_teams = await pool.query(query);

        return tournament_teams;
    } catch (error) {
        console.error('Error al obtener los equipos del torneo:', error);
        throw new Error('Error interno del servidor');
    }
}

export const getTeamsPerTournamentService = async (tournamentId) => {
    try {
        const query = `SELECT * FROM tournament_teams WHERE tournament_id = ?`;
        const result = await pool.query(query, [tournamentId]);

        return result;
    } catch (error) {
        console.error('Error al obtener los equipos del torneo:', error);
        throw new Error('Error interno del servidor');
    }
}

export const indexTeamToTournamentService = async (data, logoImage) => {
    try {
        if (!data.tournament_id) {
            throw new Error('El ID del torneo proporcionado no puede estar vacío.');
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
            const [results] = await pool.query(insertTeamQuery, [data.creator_id, data.name, logo_url]);
            teamId = results.insertId;
            console.log("Id del nuevo equipo: ", teamId);
        } else {
            teamId = data.team_id;
        }

        const tournamentExistsQuery = `SELECT id FROM tournament WHERE id = ?`;
        const [tournamentExistsResult] = await pool.query(tournamentExistsQuery, [data.tournament_id]);

        if (tournamentExistsResult.length === 0) {
            throw new Error('El ID del torneo proporcionado no existe.');
        }

        const query = `INSERT INTO tournament_teams (team_id, tournament_id) VALUES (?, ?)`;
        const result = await pool.query(query, [teamId, data.tournament_id]);

        return result;
    } catch (error) {
        throw new Error(error.message);
    }
}



// Otras funciones para obtener, actualizar o eliminar torneos según sea necesario...
//logica para poder cerrar un torneo..."finished:bool"