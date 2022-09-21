import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import config from '../../config';
import db from '../../db';
import { Router } from 'express';
import { generateHash } from '../../utils/passwords'

const router = Router();




router.post('/',  async (req, res) => {
    const newUser = req.body;
    try {
        newUser.password = generateHash(newUser.password);
        const result = await db.users_queries.insert(newUser);
        result.insertedId
        
        const token = jwt.sign(
            { userid: result.insertedId, email:newUser.email, role: 1 },
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