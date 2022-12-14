import * as userRepository from '../repositories/userRepository';
import * as error from '../middlewares/errorHandlingMiddleware';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

dotenv.config();

export async function getUser (id: number) {
    return await userRepository.findById(id)
}

export async function signUp ( dataUser:userRepository.ICreateUser ) {
    const { password, email } = dataUser;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await userRepository.findByEmail(email)
    
    if(user) throw error.conflit('user')
    
    await userRepository.insertUser({...dataUser, password: passwordHash})
}

export async function signIn( dataUser:userRepository.ILoginUser ) {
    const { email, password } = dataUser;
    
    const user = await userRepository.findByEmail(email);
    if(!user) throw error.notFound('user')
    
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if(!isPasswordValid) throw error.unauthorized('password');

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY??'secretKey', { expiresIn: '30d' });
    
    return token
}