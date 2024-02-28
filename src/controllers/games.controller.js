import { getDataGameByIdService } from '../services/games.service.js';

export const createGame = async (req, res) => {};
export const getGameById = async (req, res) => {
    try {
        const response = await getDataGameByIdService(req, res);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
