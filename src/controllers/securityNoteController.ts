import { Request, Response } from 'express';

import * as securityNoteService from '../services/securityNoteService'

export async function createSecurityNote (req: Request, res: Response) {
    const { note, title } = req.body;
    const userId = res.locals.id;

    const dataSecurityNote = {
        userId: Number(userId),
        title,
        note,
    }

    await securityNoteService.createSecurityNote(dataSecurityNote);
    
    res.status(201).send('security note registred sucessfully!')
}

export async function getUserSecurityNotes (req: Request, res: Response) {
    const userId = res.locals.id;

    const securityNotes = await securityNoteService.getUserSecurityNotes(userId);

    res.status(200).send(securityNotes)
}

export async function getSecurityNoteById (req: Request, res: Response) {
    const userId = res.locals.id;
    const securityNoteId = req.params.id;

    const securityNote = await securityNoteService.getSecurityNoteById(userId, Number(securityNoteId))

    res.status(200).send(securityNote)
}

export async function deleteSecurityNote (req: Request, res: Response) {
    const userId = res.locals.id;
    const securityNoteId = req.params.id;

    await securityNoteService.deleteSecurityNote(userId, Number(securityNoteId));
    
    res.status(200).send('security note deleted sucessfluly!')
}