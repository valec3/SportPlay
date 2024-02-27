import { Router } from 'express';
import { createTournament, getAllTournaments, getTournamentsByUserId, closeTournament } from '../controllers/tournament.controller.js';
import { validatorJwt } from '../middlewares/validatorJwt.js';



const router = Router();
router.get('/', (res) => {
    res.json({
        message: "welcome to my tournaments"
    })
});


router.post('/create-tournament', createTournament);
router.get('/all-tournaments', getAllTournaments)
router.get('/my-tournaments/', validatorJwt, getTournamentsByUserId)
router.patch('/my-tournaments/', validatorJwt, closeTournament)


export default router;