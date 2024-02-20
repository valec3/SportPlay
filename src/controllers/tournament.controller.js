import { newTournamentService, getAllTournamentsService, getTournamentsByUserIdService  } from '../services/tournament.services.js'


export const createTournament = async (req, res) => {
    try {
        const tournamentData = req.body;
        await newTournamentService(tournamentData, req.user.id);
        res.status(201).json({ message: 'Torneo creado exitosamente' });
    } catch (error) {
        console.error('Error al crear el torneo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


export const getAllTournaments = async (req, res) => {
    try {
        const tournaments = await getAllTournamentsService();
        res.json(tournaments);
    } catch (error) {
        console.error('Error al obtener los torneos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getTournamentsByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const tournaments = await getTournamentsByUserIdService(userId);
        res.json(tournaments);
    } catch (error) {
        console.error('Error al obtener los torneos del usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};