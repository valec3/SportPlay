import { pool } from '../db/index.js';

export const createPlayerService = async (req, res) => {
    const { camiseta, dni, team_id } = req.body;
    const [userWithDniExists] = await pool.query(
        'SELECT id FROM users WHERE dni = ?',
        [dni],
    );
    if (userWithDniExists.length < 1)
        throw new Error(`User with dni ${dni} does not exist`);
    const [response] = await pool.query(
        'INSERT INTO players (id, camiseta, dni, team_id) VALUES (?, ?, ?, ?)',
        [id, camiseta, dni, team_id],
    );
    if (!response) throw new Error('Internal server error');
    return {
        message: 'Player created successfully',
    };
};

export const getPlayersByTeamService = async (req, res) => {
    const { team_id } = req.params;
    const [players] = await pool.query(
        'SELECT * FROM players WHERE team_id = ?',
        [team_id],
    );
    if (players.length < 1) throw new Error('No players found');
    return {
        players,
    };
};

export const deletePlayerService = async (req, res) => {
    const { id } = req.params;
    const [response] = await pool.query('DELETE FROM players WHERE id = ?', [
        id,
    ]);
    if (!response) throw new Error('Internal server error');
    return {
        message: 'Player deleted successfully',
    };
};

export const updatePlayerService = async (req, res) => {
    const { id } = req.params;
    const { camiseta, dni, team_id } = req.body;
    const [response] = await pool.query(
        'UPDATE players SET camiseta = ?, dni = ?, team_id = ? WHERE id = ?',
        [camiseta, dni, team_id, id],
    );
    if (!response) throw new Error('Internal server error');
    return {
        message: 'Player updated successfully',
    };
};
