import { Router } from 'express';
import { getServerStatus } from './server';

const router = Router();

router.get('/server-status', async (req, res) => {
    try {
        const status = await getServerStatus();
        res.json({ status });
    } catch {
        res.status(500).send('Error fetching server status');
    }
});

export default router;