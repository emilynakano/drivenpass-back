import { Router } from 'express';

import * as securityNoteController from '../controllers/securityNoteController';

import tokenMiddleware from '../middlewares/tokenMIddleware';
import schemaMiddleware from '../middlewares/schemaMiddleware';
import securityNoteSchema from '../schemas/securityNoteSchema';

const securityNoteRouter = Router();

securityNoteRouter.post('/', 
    tokenMiddleware,
    schemaMiddleware(securityNoteSchema),
    securityNoteController.createSecurityNote
);

securityNoteRouter.get('/', 
    tokenMiddleware,
    securityNoteController.getUserSecurityNotes
);

securityNoteRouter.get('/:id', 
    tokenMiddleware,
    securityNoteController.getSecurityNoteById
);

securityNoteRouter.delete('/:id', 
    tokenMiddleware,
    securityNoteController.deleteSecurityNote
);

export default securityNoteRouter;