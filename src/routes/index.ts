import { Router } from 'express';

import userRouter from './userRouter';
import credentialRouter from './credentialRouter';
import securityNoteRouter from './securityNoteRouter';

const router = Router();

router.use(userRouter);
router.use(credentialRouter);
router.use(securityNoteRouter);

export default router;