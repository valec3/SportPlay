import Team from '../models/team.js';

const teamController = {
    createTeam: async (req, res) => {
        try {
            const { creator_id, name, logo_url } = req.body;
            const team = await Team.createTeam({
                creator_id,
                name,
                logo_url,
            });
            res.status(201).json(team);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear el equipo' });
        }
    },

    //Obteniendo todos los teams
    getAllTeams: async (req, res) => {
        try {
            const teams = await Team.findAll();
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
            const team = await Team.findByPk(id);
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
            const { name, logo_url } = req.body;
            const team = await Team.findByPk(req.params.id);
            if (!team) {
                res.status(404).json({ message: 'Equipo no encontrado' });
            }
            team.name = name;
            team.logo_url = logo_url;
            await team.save();
            res.status(200).json(team);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al actualizar el equipo.' });
        }
    },

    // Eliminando un team por id

    deleteTeambyId: async (req, res) => {
        try {
            const team = await Team.findByPk(req.params.id);
            if (!team) {
                res.status(404).json({ message: 'Equipo no encontrado' });
            } else {
                await team.destroy();
                res.status(200).json({
                    message: 'Equipo eliminado correctamente',
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar el equipo.' });
        }
    },
};

export default teamController;
