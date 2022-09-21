import { Router } from 'express';
import profileRouter from './profile_route';


const router = Router();

router.use('/profile', profileRouter);

export default router;