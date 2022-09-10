import { Router } from 'express';

import userRouter from './userRouter';
import credentialRouter from './credentialRouter';
import securityNoteRouter from './securityNoteRouter';
import networkRouter from './networkRouter';
import cardRouter from './cardRouter';

import tokenMiddleware from '../middlewares/tokenMIddleware';

const router = Router();

router.use(userRouter);
router.use("/credentials", tokenMiddleware, credentialRouter);
router.use("/notes", tokenMiddleware, securityNoteRouter);
router.use("/networks", tokenMiddleware, networkRouter);
router.use("/cards", tokenMiddleware, cardRouter);

export default router;