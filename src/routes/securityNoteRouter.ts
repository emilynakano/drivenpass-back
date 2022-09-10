import { Router } from 'express';

import * as securityNoteController from '../controllers/securityNoteController';
import paramMiddleware from '../middlewares/paramMiddleware';

import schemaMiddleware from '../middlewares/schemaMiddleware';
import securityNoteSchema from '../schemas/securityNoteSchema';

const securityNoteRouter = Router();

securityNoteRouter.post('/', 
    schemaMiddleware(securityNoteSchema),
    securityNoteController.createSecurityNote
);

securityNoteRouter.get('/', 
    securityNoteController.getUserSecurityNotes
);

securityNoteRouter.get('/:id', 
    paramMiddleware,
    securityNoteController.getSecurityNoteById
);

securityNoteRouter.delete('/:id', 
    paramMiddleware,
    securityNoteController.deleteSecurityNote
);

export default securityNoteRouter;