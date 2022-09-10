import { Router } from 'express';

import * as credentialController from '../controllers/credentialController';
import paramMiddleware from '../middlewares/paramMiddleware';

import schemaMiddleware from '../middlewares/schemaMiddleware';
import credentialSchema from '../schemas/credentialSchema';

const credentialRouter = Router();

credentialRouter.post('/', 
    schemaMiddleware(credentialSchema),
    credentialController.createCredential
);

credentialRouter.get('/', 
    credentialController.getUserCredentials
);

credentialRouter.get('/:id',
    paramMiddleware,
    credentialController.getCredentialById
);

credentialRouter.delete('/:id', 
    paramMiddleware,
    credentialController.deleteCredential
);

export default credentialRouter;