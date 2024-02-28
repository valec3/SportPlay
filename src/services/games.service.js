import { pool } from '../db/index.js';

export const createGameService = async (req, res) => {
    const { date, time, home_team_id, away_team_id, location } = req.body;
    const query = `INSERT INTO games (date, time, home_team_id, away_team_id, location) VALUES ('${date}', '${time}', '${home_team_id}', '${away_team_id}', '${location}');`;
    const [response] = await pool.query(query);
    if (!response) throw new Error('Internal server error');
    const { player_id, team_id, game_id, type } = req.body.results;

    if (type === 'red_card') {
        const query = `INSERT INTO red_cards (player_id, game_id, team_id) VALUES ('${player_id}', '${game_id}', '${team_id}');`;
        const [response] = await pool.query(query);
        if (!response) throw new Error('Internal server error');
    }
    if (type === 'yellow_card') {
        const query = `INSERT INTO yellow_cards (player_id, game_id, team_id) VALUES ('${player_id}', '${game_id}', '${team_id}');`;
        const [response] = await pool.query(query);
        if (!response) throw new Error('Internal server error');
    }
    if (type === 'goal') {
        const query = `INSERT INTO goals (player_id, game_id, team_id) VALUES ('${player_id}', '${game_id}', '${team_id}');`;
        const [response] = await pool.query(query);
        if (!response) throw new Error('Internal server error');
    }

    if (type === 'injury') {
        const query = `INSERT INTO injuries (player_id, game_id, team_id) VALUES ('${player_id}', '${game_id}', '${team_id}');`;
        const [response] = await pool.query;
        if (!response) throw new Error('Internal server error');
    }

    return {
        message: 'Game created successfully',
        data: {
            date,
            time,
            home_team_id,
            away_team_id,
            location,
        },
    };
};

export const getGamesByTeamService = async (req, res) => {
    const { team_id } = req.params;
    const query = `SELECT * FROM games WHERE home_team_id = '${team_id}' OR away_team_id = '${team_id}';`;
    const [games] = await pool.query(query);
    if (!games) throw new Error('Internal server error');
    return {
        message: 'Games found',
        data: games,
    };
};

export const getDataGameByIdService = async (req, res) => {
    const { game_id } = req.params;
    const [gameStats] = await pool.query(
        `SELECT * FROM game_team_player_stats WHERE game_id = '${game_id}';`,
    );
    if (!gameStats) throw new Error('Internal server error');
    // get unique team_id
    const teamIds = [...new Set(gameStats.map((player) => player.team_id))];
    // separar por team_id
    const teamA = gameStats.filter((player) => player.team_id === teamIds[0]);
    const teamB = gameStats.filter((player) => player.team_id === teamIds[1]);

    return {
        message: 'Game stats found',
        teamA,
        teamB,
    };
};
