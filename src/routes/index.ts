import { Router } from 'express';

import userRouter from './userRouter';
import credentialRouter from './credentialRouter';

const router = Router();

router.use(userRouter);
router.use(credentialRouter);

export default router;