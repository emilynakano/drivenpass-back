import { Router } from 'express';

import userRouter from './userRouter';
import credentialRouter from './credentialRouter';
import securityNoteRouter from './securityNoteRouter';
import networkRouter from './networkRouter';
import cardRouter from './cardRouter';

const router = Router();

router.use(userRouter);
router.use(credentialRouter);
router.use(securityNoteRouter);
router.use(networkRouter);
router.use(cardRouter);

export default router;