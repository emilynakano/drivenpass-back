import { Router } from 'express';

import * as credentialController from '../controllers/credentialController'

const credentialRouter = Router();

credentialRouter.post('/credentials', credentialController.createCredential)

export default credentialRouter;