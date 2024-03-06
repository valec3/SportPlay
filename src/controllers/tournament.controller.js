import {
    newTournamentService,
    getAllTournamentsService,
    getTournamentsByUserIdService,
    setStatusTournamentService,
    getAllTeamsPerTournamentService,
    indexTeamToTournamentService,
    getTeamsPerTournamentService,
    getInfoTournamentService,
    deleteTeamPerTournamentService
}
    from '../services/tournament.services.js'


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

export const setStatusTournament = async (req, res) => {
    try {
        const { tournament_id, status } = req.body;
        console.log("id: ", tournament_id, "status: ", status);

        if (!tournament_id || !status) {
            return res.status(400).json({ error: 'El ID del torneo o el estado no pueden estar vacíos.' });
        }
        if (status !== 'ongoing' && status !== 'finished' && status !== 'cancelled') {
            return res.status(401).json({ error: "El estado del torneo debe ser 'ongoing', 'finished' o 'cancelled'." });
        }

        const { currentStatus } = await setStatusTournamentService(status, tournament_id);

        res.status(201).json({ message: 'Éxito. El estado del torneo se ha cambiado correctamente.', status: currentStatus });
    } catch (error) {
        console.error('Error al cerrar el torneo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const allTeamsPerTournament = async (req, res) => {
    try {
        const teamsData = await getAllTeamsPerTournamentService();
        const teamsPerTournament = teamsData[0];
        res.json(teamsPerTournament);
    } catch (error) {
        console.error('Error al obtener judadores por torneo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const teamsPerTournament = async (req, res) => {
    try {
        const tournamentId = req.query.id;
        if (!tournamentId) {
            return res.status(400).json({ error: 'El ID del torneo no puede estar vacío.' });
        }
        const teamsData = await getTeamsPerTournamentService(tournamentId);
        const teamsPerTournament = teamsData;
        res.json(teamsPerTournament);
    } catch (error) {
        console.error('Error al obtener los equipos por torneo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}


export const indexTeamToTournament = async (req, res) => {
    try {
        const data = req.body;
        const logoImage = req.files?.logo_url;
        const { teamId, message } = await indexTeamToTournamentService(data, logoImage);

        if (message === 'El equipo ya está asociado a este torneo.') {
            return res.status(400).json({ error: message });
        }

        res.status(201).json({ message, team: teamId });
    } catch (error) {
        console.error('Error al asignar el equipo al torneo: ', error.message);
        if (error.message === 'El ID del equipo proporcionado no existe.' || error.message === 'El ID del torneo proporcionado no existe.') {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const deleteTeamPerTournament = async (req, res) => {
    try {
        console.log('Datos recibidos en el controlador:', req.body);

        const tournament_id = req.body.tournament_id;
        const team_id = req.body.team_id;

        if (!tournament_id || !team_id) {
            return res.status(400).json({ error: 'Se requieren tanto el ID del torneo como el ID del equipo.' });
        }

        const { message } = await deleteTeamPerTournamentService(tournament_id, team_id);

        res.status(201).json({ message });
    } catch (error) {
        console.error('Error al eliminar el equipo del torneo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};


export const getInfoTournament = async (req, res) => {
    try {
        const tournamentId = req.query.id;
        const tournamentData = await getInfoTournamentService(tournamentId);
        const tournament = tournamentData[0];
        res.json(tournament);
    } catch (error) {
        console.error('Error al obtener la información del torneo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
