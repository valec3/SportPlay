import { Router } from 'express';
import {
    createPlayer,
    deletePlayer,
    updatePlayer,
    getPlayersByTeam,
} from '../controllers/player.controller.js';
import { validatorJwt } from '../middlewares/validatorJwt.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Player routes works!',
    });
});

router.post('/create', validatorJwt, createPlayer);
router.get('/list/:team_id', validatorJwt, getPlayersByTeam);
router.delete('/delete/:dni', validatorJwt, deletePlayer);
router.put('/update', validatorJwt, updatePlayer);

export default router;
