import { Request, Response } from 'express';

import * as credentialService from '../services/credentialService'

export async function createCredential (req: Request, res: Response) {
    const { url , username, password, title } = req.body;
    const userId = res.locals.id;

    await credentialService.createCredential({ url , username, password, title });
    
    res.status(201).send('credential reegistred sucessfully!')
}