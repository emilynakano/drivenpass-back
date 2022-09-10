import { Router } from 'express';

import * as networkController from '../controllers/networkController';
import paramMiddleware from '../middlewares/paramMiddleware';

import schemaMiddleware from '../middlewares/schemaMiddleware';
import networkSchema from '../schemas/networkSchema'

const networkRouter = Router();

networkRouter.post('/', 
    schemaMiddleware(networkSchema),
    networkController.createNetwork
);

networkRouter.get('/', 
    networkController.getUserNetworks
);

networkRouter.get('/:id', 
    paramMiddleware,
    networkController.getNetworkById
);

networkRouter.delete('/:id', 
    paramMiddleware,
    networkController.deleteNetwork
);

export default networkRouter;