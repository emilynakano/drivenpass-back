import { Router } from 'express';

import * as securityNoteController from '../controllers/securityNoteController';

import tokenMiddleware from '../middlewares/tokenMIddleware';

const securityNoteRouter = Router();

securityNoteRouter.post('/securityNotes', 
    tokenMiddleware,
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