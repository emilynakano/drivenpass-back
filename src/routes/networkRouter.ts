import { Router } from 'express';

import * as networkController from '../controllers/networkController';
import tokenMiddleware from '../middlewares/tokenMIddleware';

import schemaMiddleware from '../middlewares/schemaMiddleware';
import networkSchema from '../schemas/networkSchema'

const networkRouter = Router();

networkRouter.post('/networks', 
    schemaMiddleware(networkSchema),
    tokenMiddleware,
    networkController.createNetwork
);

networkRouter.get('/networks', 
    tokenMiddleware,
    networkController.getUserNetworks
);

networkRouter.get('/networks/:id', 
    tokenMiddleware,
    networkController.getNetworkById
);

networkRouter.delete('/networks/:id', 
    tokenMiddleware,
    networkController.deleteNetwork
);

export default networkRouter;