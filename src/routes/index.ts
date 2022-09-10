import { Router } from 'express';

import userRouter from './userRouter';
import credentialRouter from './credentialRouter';
import securityNoteRouter from './securityNoteRouter';
import networkRouter from './networkRouter';
import cardRouter from './cardRouter';

const router = Router();

router.use(userRouter);
router.use("/credentials", credentialRouter);
router.use("/notes", securityNoteRouter);
router.use("/networks", networkRouter);
router.use("/cards", cardRouter);

export default router;