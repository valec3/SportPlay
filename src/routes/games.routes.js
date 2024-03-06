import { Router } from 'express';
import {
    getDataGameById,
    getDataGameForTournament,
    getGamesByTeam,
    addGameStats,
    getInfoTeamsOfGamesByTournament,
} from '../controllers/games.controller.js';
const router = Router();

router.get('/data/:game_id', getDataGameById);
router.get('/data/tournament/:tournament_id', getDataGameForTournament);
router.get('/team/:team_id', getGamesByTeam);
router.get('/info/tournament/:tournament_id', getInfoTeamsOfGamesByTournament);
router.post('/add', addGameStats);

export default router;