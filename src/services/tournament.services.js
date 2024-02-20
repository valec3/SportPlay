import { pool } from '../db/index.js';

export const newTournamentService = async (tournamentData, userId) => {
    try {
        const { logo, name, players_count, teams_count, type_tournament } = tournamentData;
        
        const query = `
            INSERT INTO tournament (logo, name, players_count, teams_count, type_tournament, creator_id)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const result = await pool.query(query, [logo, name, players_count, teams_count, type_tournament, userId]);

        return result;
    } catch (error) {
        console.error('Error al crear el torneo:', error);
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

export const getTournamentsByUserIdService = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: 'Usuario no autenticado' });
        }

        const userId = req.user.id;

        const query = `
            SELECT * FROM tournament
            WHERE creator_id = ?
        `;
        const tournaments = await pool.query(query, [userId]);

        res.json(tournaments);
    } catch (error) {
        console.error('Error al consultar los torneos del usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Otras funciones para obtener, actualizar o eliminar torneos según sea necesario...