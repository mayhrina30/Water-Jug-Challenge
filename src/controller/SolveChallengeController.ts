import { Request, Response } from 'express';
import SolveChallenge from '../utils/SolveChallenge'; // Ajusta la ruta según tu estructura

class SolveChallengeController {
    public static async solveChallenge(req: Request, res: Response): Promise<void> {
        try {
            const { x, y, z } = req.body;

            // Validación de entradas
            if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
                res.status(400).json({ error: 'X, Y, and Z must be numbers' });
                return;
            }

            // Verifica la solución
            const challenge = new SolveChallenge(x, y, z);
            const result = challenge.execute();

            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default SolveChallengeController;
