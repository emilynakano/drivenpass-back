import bcrypt from 'bcrypt';

import * as userRepository from '../repositories/userRepository';

import * as error from '../middlewares/errorHandlingMiddleware'

export async function signUp ( dataUser : userRepository.IUser ) {
    const { password, email, name } = dataUser;

    const passwordHash = await bcrypt.hash(password, 10);

    const result = await userRepository.findUser(email)
    
    if(result) throw error.badRequest('this email already exists!')
    
    await userRepository.insertUser({...dataUser, password: passwordHash})
}