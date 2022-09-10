import { Router } from 'express';

import * as cardController from '../controllers/cardController';

import schemaMiddleware from '../middlewares/schemaMiddleware';
import cardSchema from '../schemas/cardSchema';
import paramMiddleware from '../middlewares/paramMiddleware';

const cardRouter = Router();

cardRouter.post('/', 
    schemaMiddleware(cardSchema),
    cardController.createCard
);

cardRouter.get('/', 
    cardController.getUserCards
);

cardRouter.get('/:id', 
    paramMiddleware,
    cardController.getCardById
);

cardRouter.delete('/:id', 
    paramMiddleware,
    cardController.deleteCard
);

export default cardRouter;