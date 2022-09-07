import { Router } from 'express';

import * as credentialController from '../controllers/credentialController';

import schemaMiddleware from '../middlewares/schemaMiddleware';
import credentialSchema from '../schemas/credentialSchema';

const credentialRouter = Router();

credentialRouter.post('/credentials', 
    schemaMiddleware(credentialSchema),
    credentialController.createCredential
)

export default credentialRouter;