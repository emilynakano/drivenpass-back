import { Router } from 'express';

import schemaMiddleware from '../middlewares/schemaMiddleware';

import * as userController from '../controllers/userController';
import * as userSchema from '../schemas/userSchema'

const userRouter = Router();

userRouter.post('/sign-up', 
    schemaMiddleware(userSchema.userSignUpSchema), 
    userController.signUp
);


export default userRouter;