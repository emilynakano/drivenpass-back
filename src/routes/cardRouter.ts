import { Router } from 'express';

import * as cardController from '../controllers/cardController';

import tokenMiddleware from '../middlewares/tokenMIddleware';
import schemaMiddleware from '../middlewares/schemaMiddleware';
import cardSchema from '../schemas/cardSchema'

const cardRouter = Router();

cardRouter.post('/', 
    tokenMiddleware,
    schemaMiddleware(cardSchema),
    cardController.createCard
);

cardRouter.get('/', 
    tokenMiddleware,
    cardController.getUserCards
);

cardRouter.get('/:id', 
    tokenMiddleware,
    cardController.getCardById
);

cardRouter.delete('/:id', 
    tokenMiddleware,
    cardController.deleteCard
);

export default cardRouter;