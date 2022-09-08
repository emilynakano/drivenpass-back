import { Router } from 'express';

import * as cardController from '../controllers/cardController';

import tokenMiddleware from '../middlewares/tokenMIddleware';
import schemaMiddleware from '../middlewares/schemaMiddleware';
import cardSchema from '../schemas/cardSchema'

const cardRouter = Router();

cardRouter.post('/cards', 
    tokenMiddleware,
    schemaMiddleware(cardSchema),
    cardController.createCard
);

cardRouter.get('/cards', 
    tokenMiddleware,
    cardController.getUserCards
);

cardRouter.get('/cards/:id', 
    tokenMiddleware,
    cardController.getCardById
);

cardRouter.delete('/cards/:id', 
    tokenMiddleware,
    cardController.deleteCard
);

export default cardRouter;