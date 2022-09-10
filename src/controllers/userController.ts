import { Request, Response } from 'express';

import * as userService from '../services/userService';

export async function signUp (req: Request, res: Response) {
    const { password, email, name } = req.body;

    await userService.signUp({ password, email, name });

    res.status(201).send('user registred sucessfuly!')
}

export async function signIn (req: Request, res: Response) {
    const { password, email } = req.body;

    const token:string = await userService.signIn({ password, email });

    res.status(200).send({token});
}