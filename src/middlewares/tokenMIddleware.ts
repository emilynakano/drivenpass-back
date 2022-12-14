import { NextFunction, Response, Request } from 'express';

import * as error from './errorHandlingMiddleware';

import * as userService from '../services/userService'

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default async function tokenMiddleware ( req: Request, res: Response, next: NextFunction ) {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) {
        throw error.unauthorized('token')
    }

    try {

        let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY??'secretKey');
        
        const user = await userService.getUser((decoded as jwt.JwtPayload).id);
        if(!user) throw error.notFound('user');

        res.locals.id = user.id;

        next()

    } catch(err) {

        throw error.unauthorized("token");
        
    }

}
