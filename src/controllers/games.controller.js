import {
    getDataGameByIdService,
    getDataGameForTournamentService,
    getGamesByTeamService,
    createGameService,
    addGameStatsService,
    getInfoTeamsOfGamesTournamentService,
    getInfoTeamsOfGamesTournamentByIdService,
    getAllGamesService,
} from '../services/games.service.js';

export const createGame = async (req, res) => {
    try {
        const data = req.body;
        const response = await createGameService(data);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const addGameStats = async (req, res) => {
    try {
        const data = req.body;
        await addGameStatsService(data);
        res.status(201).json({ message: 'Stats added' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getGamesByTeam = async (req, res) => {
    try {
        const params = req.params;
        const response = await getGamesByTeamService(params);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getDataGameById = async (req, res) => {
    try {
        const params = req.params;
        const response = await getDataGameByIdService(params);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getDataGameForTournament = async (req, res) => {
    try {
        const { tournament_id } = req.params;
        const response = await getDataGameForTournamentService(tournament_id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getInfoTeamsOfGamesTournament = async (req, res) => {
    try {
        const response = await getInfoTeamsOfGamesTournamentService();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getInfoTeamsOfGamesTournamentById = async (req, res) => {
    try {
        const { tournament_id } = req.params;
        const response = await getInfoTeamsOfGamesTournamentByIdService(
            tournament_id,
        );
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllGames = async (req, res) => {
    try {
        const response = await getAllGamesService();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
