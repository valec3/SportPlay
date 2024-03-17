import { pool } from '../db/index.js';

export const createGameService = async (game) => {
    const { date, time, home_team_id, away_team_id, location, tournament_id } =
        game;
    if (
        !date ||
        !time ||
        !home_team_id ||
        !away_team_id ||
        !location ||
        !tournament_id
    )
        throw new Error('All fields are required');
    const query = `INSERT INTO games (date, time, home_team_id, away_team_id, location, tournament_id) VALUES ('${date}', '${time}', '${home_team_id}', '${away_team_id}', '${location}', '${tournament_id}');`;
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

export const addGameStatsService = async (data) => {
    const { home_team, away_team, game_id } = data;
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
    const query =
        'UPDATE games SET score_home = ?, score_away = ? WHERE id = ?';
    console.log('Updating game score');
    const [response] = await pool.query(query, [
        score_home,
        score_away,
        game_id,
    ]);
    if (!response) throw new Error('Internal server error');
    console.log('Game score updated');
    // Add stats for home team
    for (const player of home_players) {
        const { player_id, yellow, red, injury, goal } = player;
        if (yellow) {
            for (let i = 0; i < yellow; i++) {
                await addPlayerStats(
                    player_id,
                    game_id,
                    home_team_id,
                    'yellow',
                );
            }
        }
        if (red) {
            for (let i = 0; i < red; i++) {
                await addPlayerStats(player_id, game_id, home_team_id, 'red');
            }
        }
        if (injury) {
            for (let i = 0; i < injury; i++) {
                await addPlayerStats(
                    player_id,
                    game_id,
                    home_team_id,
                    'injury',
                );
            }
        }
        if (goal) {
            for (let i = 0; i < goal; i++) {
                await addPlayerStats(player_id, game_id, home_team_id, 'goal');
            }
        }
    }
    // Add stats for away team
    for (const player of away_players) {
        const { player_id, yellow, red, injury, goal } = player;
        if (yellow) {
            for (let i = 0; i < yellow; i++) {
                await addPlayerStats(
                    player_id,
                    game_id,
                    away_team_id,
                    'yellow',
                );
            }
        }
        if (red) {
            for (let i = 0; i < red; i++) {
                await addPlayerStats(player_id, game_id, away_team_id, 'red');
            }
        }
        if (injury) {
            for (let i = 0; i < injury; i++) {
                await addPlayerStats(
                    player_id,
                    game_id,
                    away_team_id,
                    'injury',
                );
            }
        }
        if (goal) {
            for (let i = 0; i < goal; i++) {
                await addPlayerStats(player_id, game_id, away_team_id, 'goal');
            }
        }
    }
    return {
        message: 'Stats added',
    };
};

export const getGamesByTeamService = async (params) => {
    const { team_id } = params;
    if (!team_id) throw new Error('Team id is required');
    const query = `SELECT * FROM games WHERE home_team_id = '${team_id}' OR away_team_id = '${team_id}';`;
    const [games] = await pool.query(query);
    if (!games) throw new Error('Internal server error');
    return {
        message: 'Games found',
        data: games,
    };
};

export const getDataGameByIdService = async (params) => {
    const { game_id } = params;
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

export const getDataGameForTournamentService = async (tournament_id) => {
    if (!tournament_id) throw new Error('Tournament id is required');
    const query = `SELECT * FROM game_team_stats WHERE tournament_id = '${tournament_id}';`;
    const [games] = await pool.query(query);
    if (!games) throw new Error('Internal server error');
    return {
        message: 'Games found',
        data: games,
    };
};

export const getInfoTeamsOfGamesTournamentService = async () => {
    const query = `SELECT * FROM tournament_games_teams;`;
    const [games] = await pool.query(query);
    if (!games) throw new Error('Internal server error');
    return {
        message: 'Games found',
        data: games,
    };
};

export const getInfoTeamsOfGamesTournamentByIdService = async (
    tournament_id,
) => {
    if (!tournament_id) throw new Error('Tournament id is required');
    const query = `SELECT * FROM tournament_games_teams WHERE tournament_id = '${tournament_id}';`;
    const [games] = await pool.query(query);
    if (!games) throw new Error('Internal server error');
    return {
        message: 'Games found',
        data: games,
    };
};

export const getAllGamesService = async () => {
    const [games] = await pool.query('SELECT * FROM games');
    if (!games) throw new Error('Internal server error');
    return {
        message: 'Games found',
        data: games,
    };
};
