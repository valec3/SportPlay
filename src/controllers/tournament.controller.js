import {
    newTournamentService,
    getAllTournamentsService,
    getTournamentsByUserIdService,
    closeTournamentService,
    getTournamentTeamsService,
    indexTeamToTournamentService,
    getStatsTournamentService,
    getInfoTournamentService,
} from '../services/tournament.services.js';

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

export const getAllTournaments = async (req, res) => {
    try {
        const tournamentsData = await getAllTournamentsService();
        const tournaments = tournamentsData[0];
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
        const tournaments = tournamentsData[0];

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

        res.status(201).json({ message: 'Torneo cerrado de forma exitosa' });
    } catch (error) {
        console.error('Error al cerrar el torneo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const tournamentTeams = async (req, res) => {
    try {
        const teamsData = await getTournamentTeamsService();
        const teamsPerTournament = teamsData[0];
        res.json(teamsPerTournament);
    } catch (error) {
        console.error('Error al obtener judadores por torneo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const indexTeamToTournament = async (req, res) => {
    try {
        const data = req.body;
        const logoImage = req.files?.logo_url;
        const { teamId, message } = await indexTeamToTournamentService(
            data,
            logoImage,
        );
        if (message === 'Equipo creado y agregado al torneo exitosamente') {
            res.status(201).json({ message: message, team: teamId });
        } else {
            res.status(201).json({ message: 'Equipo asignado correctamente' });
        }
    } catch (error) {
        console.error('Error al asignar el equipo al torneo: ', error.message);
        if (error.message === 'El ID del equipo proporcionado no existe.') {
            return res.status(400).json({ error: error.message });
        } else if (
            error.message === 'El ID del torneo proporcionado no existe.'
        ) {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getStatsTournament = async (req, res) => {
    try {
        const tournamentId = req.params.id;
        const tournamentData = await getStatsTournamentService(tournamentId);
        const tournament = tournamentData[0];
        res.json(tournament);
    } catch (error) {
        console.error('Error al obtener la información del torneo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getInfoTournament = async (req, res) => {
    try {
        const tournamentId = req.params.id;
        const tournamentData = await getInfoTournamentService(tournamentId);
        const tournament = tournamentData[0];
        res.json(tournament);
    } catch (error) {
        console.error('Error al obtener la información del torneo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
