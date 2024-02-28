import { Router } from 'express';
import { getGameById } from '../controllers/games.controller.js';
const router = Router();

router.get('/:game_id', getGameById);

export default router;
