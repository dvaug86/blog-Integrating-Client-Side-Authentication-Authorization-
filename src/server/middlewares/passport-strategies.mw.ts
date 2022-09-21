import * as passport from 'passport';
import * as PassportLocal from 'passport-local';
import * as PassportJWT from 'passport-jwt';
import db from '../db';
import config from '../config';
import { Application }from 'express';
import { UsersTable } from '../db/models';
import { compareHash } from '../utils/passwords';
import { Payload } from '../types';

export function configurePassport(app: Application){
    passport.serializeUser((user: Payload, done) => {
        if (user.password) {
            delete user.password;
        }
        done(null, user);
    });
    passport.deserializeUser((user, done) => done(null, user!));
    
    passport.use(new PassportLocal.Strategy({
        usernameField: 'email' //needs to be exactly like req.body seen in postman
    }, async (email, password, done) => {
        try {
            const [userFound] = await db.users_queries.find('email', email);
            if (userFound && compareHash(password, userFound.password!)) {
                delete userFound.password; //won't allow us to daisy chain since this is the last place we need the password
                done(null, userFound)
            } else {
                done(null, false); //status 401 text of unauthorized
            }
        } catch (error) {
            done(error);
        }
    }));
    
    
    
    passport.use(new PassportJWT.Strategy({
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwt.secret
    }, (payload: Payload, done) => {
        try {
            done(null, payload)
        } catch (error) {
            done(error);
        }
    }));
    app.use(passport.initialize());
}

