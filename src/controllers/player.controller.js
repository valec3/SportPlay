import {
    createPlayerService,
    deletePlayerService,
    getPlayersByTeamService,
    updatePlayerService,
} from '../services/player.services.js';
export const createPlayer = async (req, res) => {
    try {
        const data = await createPlayerService(req, res);
        res.json({ ...data });
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ message: error.message });
    }
};

export const getPlayersByTeam = async (req, res) => {
    try {
        const data = await getPlayersByTeamService(req, res);
        res.json({ ...data });
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ message: error.message });
    }
};
export const deletePlayer = async (req, res) => {
    try {
        const data = await deletePlayerService(req, res);
        res.json({ ...data });
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ message: error.message });
    }
};

export const updatePlayer = async (req, res) => {
    try {
        const data = await updatePlayerService(req, res);
        res.json({ ...data });
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ message: error.message });
    }
};
