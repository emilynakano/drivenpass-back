import { Router } from 'express';

import * as securityNoteController from '../controllers/securityNoteController';

import tokenMiddleware from '../middlewares/tokenMIddleware';
import schemaMiddleware from '../middlewares/schemaMiddleware';
import securityNoteSchema from '../schemas/securityNoteSchema';

const securityNoteRouter = Router();

securityNoteRouter.post('/securityNotes', 
    tokenMiddleware,
    schemaMiddleware(securityNoteSchema),
    securityNoteController.createSecurityNote
);

securityNoteRouter.get('/securityNotes', 
    tokenMiddleware,
    securityNoteController.getUserSecurityNotes
);

securityNoteRouter.get('/securityNotes/:id', 
    tokenMiddleware,
    securityNoteController.getSecurityNoteById
);

securityNoteRouter.delete('/securityNotes/:id', 
    tokenMiddleware,
    securityNoteController.deleteSecurityNote
);

export default securityNoteRouter;