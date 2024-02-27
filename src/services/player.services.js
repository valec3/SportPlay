import { pool } from '../db/index.js';

export const createPlayerService = async (req, res) => {
    const { first_name, last_name, camiseta, dni, team_id } = req.body;
    const [userExists] = await pool.query('SELECT * FROM users WHERE dni = ?', [
        dni,
    ]);
    const playerVerified = userExists.length > 0;
    console.log(playerVerified);
    const [playerExists] = await pool.query(
        'SELECT * FROM players WHERE dni = ?',
        [dni],
    );
    // update team_id player if exists
    if (playerExists.length > 0) {
        const [response] = await pool.query(
            'UPDATE players SET first_name = ?, last_name = ?, camiseta = ?, team_id = ?, verified = ? WHERE dni = ?',
            [first_name, last_name, camiseta, team_id, playerVerified, dni],
        );
        if (!response) throw new Error('Internal server error');
    } else {
        const query = `INSERT INTO players (first_name, last_name, camiseta, dni, team_id,verified) VALUES ('${first_name}', '${last_name}', '${camiseta}', '${dni}', '${team_id}',${playerVerified});`;
        const [response] = await pool.query(query);
        if (!response) throw new Error('Internal server error');
    }

    return {
        message: 'Player created successfully',
        data: {
            verified: playerVerified,
            first_name,
            last_name,
            camiseta,
            dni,
            team_id,
        },
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
    const { dni } = req.params;
    const [response] = await pool.query('DELETE FROM players WHERE dni = ?', [
        dni,
    ]);
    if (!response) throw new Error('Internal server error');
    return {
        message: 'Player deleted successfully',
    };
};

export const updatePlayerService = async (req, res) => {
    const { first_name, last_name, camiseta, dni, team_id } = req.body;
    if (!first_name || !last_name || !camiseta || !dni || !team_id) {
        throw new Error('All fields are required');
    }
    const [response] = await pool.query(
        'UPDATE players SET first_name = ?, last_name = ?, camiseta = ?, team_id = ? WHERE dni = ?',
        [first_name, last_name, camiseta, team_id, dni],
    );
    if (!response) throw new Error('Internal server error');
    return {
        message: 'Player updated successfully',
    };
};

export const verifyPlayerService = async (dni) => {
    const [response] = await pool.query('SELECT * FROM users WHERE dni = ?', [
        dni,
    ]);
    return response.length > 0;
};
