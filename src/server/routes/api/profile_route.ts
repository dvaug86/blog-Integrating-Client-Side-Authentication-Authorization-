import { Router } from 'express';
import { ReqUser } from '../../types';
import { tokenCheck } from '../../middlewares/auth.mw';

const router = Router();

router.get('/', tokenCheck, (req: ReqUser, res) => {
    try {
        
        res.json({ message: `Verified email of ${req.user?.email}` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'we suck again!', error: error.message })
    }
});

export default router;