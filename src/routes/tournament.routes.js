import { Router } from 'express';
import { createTournament, getTournamentsByUserId } from '../controllers/tournament.controller.js';
import { validatorJwt } from '../middlewares/validatorJwt.js';



const router = Router();
router.get('/', (req, res) => {
    res.json({
        message: "welcome to my tournaments"
    })
});


router.post('/create-tournament', validatorJwt, createTournament);
router.get('/my-tournaments', validatorJwt, getTournamentsByUserId)


export default router;