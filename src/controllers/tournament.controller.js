import { newTournamentService, getAllTournamentsService, getTournamentsBycreatorIdService } from '../services/tournament.services.js'


export const createTournament = async (req, res) => {
    try {
        const tournamentData = req.body;
        const tournamentImage = req.files?.logo;
        const creatorId = req.body.creator_id;

        //Validaciones
        if (!creatorId) {
            return res.status(401).json({ error: 'El id del creador es obligatorio' });
        } if (!tournamentData.name || tournamentData.name.length < 3) {
            return res.status(401).json({ error: 'El nombre del torneo es obligatorio' });
        }
        await newTournamentService(tournamentData, tournamentImage, creatorId);

        res.status(201).json({ message: 'Torneo creado exitosamente' });
    } catch (error) {
        console.error('Error al crear el torneo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getTournamentsBycreatorId = async (req, res) => {
    try {
        const userId = req.headers.authorization;
        const creator_id = req.body.creator_id;
        if (!userId) {
            return res.status(401).json({ error: 'Usuario no autenticado' });
        }
        const tournaments = await getTournamentsBycreatorIdService(creator_id);
        res.status(201).json(tournaments);
        // res.json(tournaments);
    } catch (error) {
        console.error('Error al obtener los torneos del usuario:', error);
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