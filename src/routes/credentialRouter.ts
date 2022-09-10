import { Router } from 'express';

import * as credentialController from '../controllers/credentialController';

import schemaMiddleware from '../middlewares/schemaMiddleware';
import credentialSchema from '../schemas/credentialSchema';
import tokenMiddleware from '../middlewares/tokenMIddleware';

const credentialRouter = Router();

credentialRouter.post('/', 
    tokenMiddleware,
    schemaMiddleware(credentialSchema),
    credentialController.createCredential
);

credentialRouter.get('/', 
    tokenMiddleware,
    credentialController.getUserCredentials
);

credentialRouter.get('/:id', 
    tokenMiddleware,
    credentialController.getCredentialById
);

credentialRouter.delete('/:id', 
    tokenMiddleware,
    credentialController.deleteCredential
);

export default credentialRouter;