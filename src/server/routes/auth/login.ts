import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import config from '../../config';
import { Router } from 'express';
import { ReqUser } from '../../types';


const router = Router();




router.post('/',  passport.authenticate('local', { session: false }), async (req: ReqUser, res) => {
    try {
        const token = jwt.sign(
            
            { userid: req.user?.id, email:req.user?.email, role: 1 },
            config.jwt.secret!,
            { expiresIn: config.jwt.expires }
        );
        return res.json(token);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'bummer' });
    }
});


export default router;