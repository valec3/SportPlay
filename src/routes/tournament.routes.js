import { Router } from 'express';
import {
    createTournament,
    getAllTournaments,
    getTournamentsByUserId,
    closeTournament,
    tournamentTeams,
    indexTeamToTournament,
    getInfoTournament,
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
router.patch('/my-tournaments', validatorJwt, closeTournament);
router.get('/tournament-teams', tournamentTeams);
router.post('/tournament-teams', indexTeamToTournament);
router.get('/info-tournament', getInfoTournament);

export default router;
