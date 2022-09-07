import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

import * as userRepository from '../repositories/userRepository';

import * as error from '../middlewares/errorHandlingMiddleware'

export async function signUp ( dataUser:userRepository.ICreateUser ) {
    const { password, email, name } = dataUser;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await userRepository.findUser(email)
    
    if(user) throw error.badRequest('email already exists!')
    
    await userRepository.insertUser({...dataUser, password: passwordHash})
}

export async function signIn( dataUser:userRepository.ILoginUser ) {
    const { email, password } = dataUser;
    
    const user = await userRepository.findUser(email);
    
    if(!user) throw error.notFound('user')
    
    const isPasswordIsValid = bcrypt.compareSync(password, user.password);
    
    if(!isPasswordIsValid) throw error.unauthorized('password');

    const secretKey:string = process.env.JWT_SECRET_KEY??'secretKey';

    const token = jwt.sign({ test: 'test' }, secretKey, { expiresIn: '30d' });
    
    return token
}