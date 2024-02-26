import { Router } from 'express';
import {
    createPlayer,
    deletePlayer,
    updatePlayer,
    getPlayersByTeam,
} from '../controllers/player.controller';
import { validatorJwt } from '../middlewares/validatorJwt';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Player routes works!',
    });
});

router.post('/', validatorJwt, createPlayer);
router.get('/:team_id', validatorJwt, getPlayersByTeam);
router.delete('/:id', validatorJwt, deletePlayer);
router.put('/:id', validatorJwt, updatePlayer);

export default router;
