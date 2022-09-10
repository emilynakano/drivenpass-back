import { Router } from 'express';

import * as networkController from '../controllers/networkController';
import tokenMiddleware from '../middlewares/tokenMIddleware';

import schemaMiddleware from '../middlewares/schemaMiddleware';
import networkSchema from '../schemas/networkSchema'

const networkRouter = Router();

networkRouter.post('/', 
    schemaMiddleware(networkSchema),
    tokenMiddleware,
    networkController.createNetwork
);

networkRouter.get('/', 
    tokenMiddleware,
    networkController.getUserNetworks
);

networkRouter.get('/:id', 
    tokenMiddleware,
    networkController.getNetworkById
);

networkRouter.delete('/:id', 
    tokenMiddleware,
    networkController.deleteNetwork
);

export default networkRouter;