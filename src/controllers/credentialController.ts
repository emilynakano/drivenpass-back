import { Request, Response } from 'express';

export function createCredential (req: Request, res: Response) {
    const { url , username, password, title } = req.body;

    res.status(201).send('credential reegistred sucessfully!')
}