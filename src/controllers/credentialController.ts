import { Request, Response } from 'express';

import * as credentialService from '../services/credentialService'

export async function createCredential (req: Request, res: Response) {
    const { url , username, password, title } = req.body;
    const userId = res.locals.id;

    const dataCredential = {
        url, 
        username, 
        password, 
        title,
        userId: Number(userId)
    }

    await credentialService.createCredential(dataCredential);
    
    res.status(201).send('credential reegistred sucessfully!')
}

export async function getUserCredentials (req: Request, res: Response) {
    const userId = res.locals.id;
    
    const credentials = await credentialService.getUserCredentials(userId)
    
    res.status(200).send(credentials)
}

export async function getCredentialById (req: Request, res: Response) {
    const userId = res.locals.id;
    const credentialId = req.params.id;

    const credentials = await credentialService.getCredentialById(userId, Number(credentialId))
    
    res.status(200).send(credentials)
}