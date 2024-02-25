import Team from '../models/team.js';

const teamController = {
    createTeam: async (req, res) => {
        try {
            const { creator_id, name, logo_url } = req.body;
            if (!creator_id || !name || !logo_url) {
                return res.status(400).json({
                    message:
                        'Faltan campos obligatorios: creator_id, name, logo_url',
                });
            }
            const newTeam = { creator_id, name, logo_url };
            const createdTeam = await Team.createTeam(newTeam);
            res.status(201).json({
                message: 'Equipo creado exitosamente',
                team: createdTeam,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear el equipo' });
        }
    },

    //Obteniendo todos los teams
    getAllTeams: async (req, res) => {
        try {
            const teams = await Team.getAllTeams();
            res.status(200).json(teams);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error al obtener todos los equipos.',
            });
        }
    },

    // Obteniendo un team por id

    getTeamById: async (req, res) => {
        try {
            const { id } = req.params;
            const team = await Team.getTeamById(id);
            if (!team) {
                res.status(404).json({ message: 'Equipo no encontrado' });
            } else {
                res.status(200).json(team);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener el equipo.' });
        }
    },

    // Actualizando un team por id

    updateTeamById: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedTeam = req.body;
            const updateSuccess = await Team.updateTeamById(id, updatedTeam);
            if (updateSuccess) {
                res.status(200).json({
                    message: 'Equipo actualizado correctamente',
                });
            } else {
                res.status(400).json({
                    message: 'No se pudo actualizar el equipo',
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar el equipo' });
        }
    },

    // Eliminando un team por id

    deleteTeambyId: async (req, res) => {
        try {
            const { id } = req.params;
            const deleteSuccess = await Team.deleteTeamById(id);
            if (!deleteSuccess) {
                res.status(200).json({
                    message: 'Equipo eliminado correctamente',
                });
            } else {
                res.status(400).json({
                    message: 'Error al eliminar el equipo',
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar el equipo.' });
        }
    },
};

export default teamController;
