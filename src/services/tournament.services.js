import { pool } from '../db/index.js';
import { uploadImage } from '../lib/cloudinary.js';
import fs from 'fs-extra'

export const newTournamentService = async (tournamentData,tournamentImage, creatorId) => {
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


export const getAllTournamentsService = async () => {
    try {
        const query = 'SELECT id, logo, creator_id, name, players_count, teams_count, type_tournament, finished FROM tournament';
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

// Otras funciones para obtener, actualizar o eliminar torneos según sea necesario...
//logica para poder cerrar un torneo..."finished:bool"