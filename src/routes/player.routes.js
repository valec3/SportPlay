import { Router } from 'express';
import {
    createPlayer,
    deletePlayer,
    updatePlayer,
    getPlayersByTeam,
    getAllPlayers,
    getProfile,
    getPlayersByGame,
} from '../controllers/player.controller.js';
import { validatorJwt } from '../middlewares/validatorJwt.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Player routes works!',
    });
});

router.post('/create', validatorJwt, createPlayer);
router.get('/list/:team_id', getPlayersByTeam);
router.get('/all', validatorJwt, getAllPlayers);
router.get('/profile', validatorJwt, getProfile);
router.delete('/delete/:dni', validatorJwt, deletePlayer);
router.put('/update', validatorJwt, updatePlayer);
router.get('/game/:game_id', getPlayersByGame);
export default router;
