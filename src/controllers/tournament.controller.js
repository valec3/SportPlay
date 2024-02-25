import { newTournamentService, getAllTournamentsService, getTournamentsByUserIdService, closeTournamentService } from '../services/tournament.services.js'


export const createTournament = async (req, res) => {
    try {
        const tournamentData = req.body;
        const creatorId = req.body.creator_id;
        const tournamentImage = req.files?.logo;
        await newTournamentService(tournamentData, tournamentImage, creatorId);

        res.status(201).json({ message: 'Torneo creado exitosamente' });
    } catch (error) {
        console.error('Error al crear el torneo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getAllTournaments = async (res) => {
    try {
        const tournamentsData = await getAllTournamentsService();
        const tournaments = tournamentsData[0]
        res.json(tournaments);
    } catch (error) {
        console.error('Error al obtener los torneos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getTournamentsByUserId = async (req, res) => {
    try {
        const userId = req.query.id;
        const tournamentsData = await getTournamentsByUserIdService(userId);
        const tournaments = tournamentsData[0]

        res.json(tournaments);
    } catch (error) {
        console.error('Error al obtener los torneos del usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const closeTournament = async (req, res) => {
    try {
        const tournamentId = req.body.id;
        const userId = req.query.id;
        await closeTournamentService(tournamentId, userId);

        res.status(201).json({ message: "Torneo cerrado de forma exitosa" });
    } catch (error) {
        console.error('Error al cerrar el torneo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
