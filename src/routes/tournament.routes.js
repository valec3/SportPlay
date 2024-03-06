import { Router } from 'express';
import {
    createTournament,
    getAllTournaments,
    getTournamentsByUserId,
    setStatusTournament,
    allTeamsPerTournament,
    indexTeamToTournament,
    getInfoTournament,
    teamsPerTournament,
    deleteTeamPerTournament
} from '../controllers/tournament.controller.js';
import { validatorJwt } from '../middlewares/validatorJwt.js';

const router = Router();
router.get('/', (res) => {
    res.json({
        message: 'welcome to my tournaments',
    });
});

router.post('/create-tournament', createTournament);
router.get('/all-tournaments', getAllTournaments);
router.get('/my-tournaments', validatorJwt, getTournamentsByUserId);
router.patch('/my-tournaments', validatorJwt, setStatusTournament);
router.get('/all-tournament-teams', allTeamsPerTournament);
router.get('/tournament-teams', teamsPerTournament);
router.post('/tournament-teams', indexTeamToTournament);
router.delete('/tournament-teams', deleteTeamPerTournament);
router.get('/info-tournament', getInfoTournament);

export default router;
