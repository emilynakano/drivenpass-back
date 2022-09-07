import { Router } from 'express';

import * as credentialController from '../controllers/credentialController';

import schemaMiddleware from '../middlewares/schemaMiddleware';
import credentialSchema from '../schemas/credentialSchema';
import tokenMiddleware from '../middlewares/tokenMIddleware';

const credentialRouter = Router();

credentialRouter.post('/credentials', 
    tokenMiddleware,
    schemaMiddleware(credentialSchema),
    credentialController.createCredential
)

export default credentialRouter;