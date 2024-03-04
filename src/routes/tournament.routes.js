import { Router } from 'express';
import { createTournament, getAllTournaments, getTournamentsByUserId, closeTournament, tournamentTeams, indexTeamToTournament, teamsPerTournament } from '../controllers/tournament.controller.js';
import { validatorJwt } from '../middlewares/validatorJwt.js';

const router = Router();
router.get('/', (res) => {
    res.json({
        message: 'welcome to my tournaments',
    });
});

router.post('/create-tournament', createTournament);
router.get('/all-tournaments', getAllTournaments)
router.get('/my-tournaments', validatorJwt, getTournamentsByUserId)
router.patch('/my-tournaments', validatorJwt, closeTournament)
router.get('/tournament-teams', tournamentTeams)
router.get('/tournament-teams/:id', teamsPerTournament)
router.post('/tournament-teams', indexTeamToTournament)

export default router;
