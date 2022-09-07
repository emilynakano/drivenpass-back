import { NextFunction, Response, Request } from 'express';

import { unauthorized } from './errorHandlingMiddleware';

import * as userService from '../services/userService'

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default async function tokenMiddleware ( req: Request, res: Response, next: NextFunction ) {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) {
        throw unauthorized('token')
    }

    const secretKey = process.env.JWT_SECRET_KEY??'secretKey';

    let idToken: any;

    jwt.verify(token, secretKey, function(err, decoded){

        if(err)  {
            throw unauthorized("token")
        }

        idToken = (decoded as {id: number}).id;
        
    });
    

    next()
}
