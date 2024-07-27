import { Router } from 'express';
import SolveChallengeController from '../controller/SolveChallengeController';
const router = Router();

router.post('/solve', SolveChallengeController.solveChallenge);

export default router;

