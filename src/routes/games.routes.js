import { Router } from 'express';
import {
    getDataGameById,
    getDataGameForTournament,
    getGamesByTeam,
    addGameStats,
    getInfoTeamsOfGamesByTournament,
    createGame,
    getAllGames,
} from '../controllers/games.controller.js';
const router = Router();

router.get('/data/:game_id', getDataGameById);
router.get('/all', getAllGames);
router.post('/create', createGame);
router.get('/data/tournament/:tournament_id', getDataGameForTournament);
router.get('/team/:team_id', getGamesByTeam);
router.get('/info-list', getInfoTeamsOfGamesByTournament);
router.post('/add', addGameStats);

export default router;
