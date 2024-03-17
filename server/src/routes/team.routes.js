import { Router } from 'express';
import teamController from '../controllers/teamController.js';

const router = Router();

router.post('/create', teamController.createTeam);
router.get('/list', teamController.getAllTeams);
router.get('/:id', teamController.getTeamById);
router.put('/update/:id', teamController.updateTeamById);
router.delete('/delete/:id', teamController.deleteTeambyId);

export default router;
