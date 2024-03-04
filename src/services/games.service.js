import { pool } from '../db/index.js';

export const createGameService = async (req, res) => {
    const { date, time, home_team_id, away_team_id, location } = req.body;
    if (!date || !time || !home_team_id || !away_team_id || !location)
        throw new Error('All fields are required');
    const query = `INSERT INTO games (date, time, home_team_id, away_team_id, location) VALUES ('${date}', '${time}', '${home_team_id}', '${away_team_id}', '${location}');`;
    const [response] = await pool.query(query);
    if (!response) throw new Error('Internal server error');

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

const addPlayerStats = async (id, game_id, team_id, type) => {
    let query;
    switch (type) {
        case 'goal':
            query = `INSERT INTO goals (player_id, game_id, team_id) VALUES ('${id}', '${game_id}', '${team_id}');`;
            break;
        case 'yellow':
            query = `INSERT INTO yellow_cards (player_id, game_id, team_id) VALUES ('${id}', '${game_id}', '${team_id}');`;
            break;
        case 'red':
            query = `INSERT INTO red_cards (player_id, game_id, team_id) VALUES ('${id}', '${game_id}', '${team_id}');`;
            break;
        case 'injury':
            query = `INSERT INTO injuries (player_id, game_id, team_id) VALUES ('${id}', '${game_id}', '${team_id}');`;
            break;
        default:
            throw new Error('Invalid player type');
    }
    await pool.query(query);
};

export const addGameStatsService = async (req, res) => {
    const { home_team, away_team, game_id } = req.body;
    if (!home_team || !away_team || !game_id)
        throw new Error('All fields are required');
    const {
        id: home_team_id,
        score: score_home,
        players: home_players,
    } = home_team;
    const {
        id: away_team_id,
        score: score_away,
        players: away_players,
    } = away_team;
    // Update game score
    const query = `UPDATE games SET score_home = '${score_home}', score_away = '${score_away}' WHERE game_id = '${game_id}';`;
    await pool.query(query);
    // Add stats for home team
    for (const player of home_players) {
        const { id, type } = player;
        if (
            type === 'goal' ||
            type === 'yellow' ||
            type === 'red' ||
            type === 'injury'
        ) {
            await addPlayerStats(id, game_id, home_team_id, type);
        }
    }
    // Add stats for away team
    for (const player of away_players) {
        const { id, type } = player;
        if (
            type === 'goal' ||
            type === 'yellow' ||
            type === 'red' ||
            type === 'injury'
        ) {
            await addPlayerStats(id, game_id, away_team_id, type);
        }
    }
};

export const getGamesByTeamService = async (req, res) => {
    const { team_id } = req.params;
    if (!team_id) throw new Error('Team id is required');
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
    if (!game_id) throw new Error('Game id is required');
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
