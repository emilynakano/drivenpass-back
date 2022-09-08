import { Router } from 'express';

import * as networkController from '../controllers/networkController'
import tokenMiddleware from '../middlewares/tokenMIddleware';

const networkRouter = Router();

networkRouter.post('/networks', 
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