import { Request, Response } from 'express';

import * as cardService from '../services/cardService'

export async function createCard (req: Request, res: Response) {
    const dataCard = req.body;
    const userId = res.locals.id;

    await cardService.createCard({...dataCard, userId});
    
    res.status(201).send('card reegistred sucessfully!')
}

export async function getUserCards (req: Request, res: Response) {
    const userId = res.locals.id;
    
    const cards = await cardService.getUserCards(userId)
    
    res.status(200).send(cards)
}

export async function getCardById (req: Request, res: Response) {
    const userId = res.locals.id;
    const cardId = req.params.id;

    const cards = await cardService.getCardById(userId, Number(cardId))
    
    res.status(200).send(cards)
}

export async function deleteCard (req: Request, res: Response) {
    const userId = res.locals.id;
    const cardId = req.params.id;

    await cardService.deleteCard(userId, Number(cardId))
    
    res.status(200).send('card deleted sucessfuly!')
}