import { Router } from 'express';
import { createTournament, getAllTournaments, getTournamentsByUserId } from '../controllers/tournament.controller.js';
import { validatorJwt } from '../middlewares/validatorJwt.js';



const router = Router();
router.get('/', (req, res) => {
    res.json({
        message: "welcome to my tournaments"
    })
});


router.post('/create-tournament', createTournament);
router.get('/all-tournaments', getAllTournaments)
router.get('/my-tournaments', validatorJwt, getTournamentsByUserId)


export default router;