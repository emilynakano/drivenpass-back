import bcrypt from 'bcrypt';

import * as userRepository from '../repositories/userRepository';

import * as error from '../middlewares/errorHandlingMiddleware'

export async function signUp ( dataUser:userRepository.ICreateUser ) {
    const { password, email, name } = dataUser;

    const passwordHash = await bcrypt.hash(password, 10);

    const emailExists = await userRepository.findUser(email)
    
    if(emailExists) throw error.badRequest('this email already exists!')
    
    await userRepository.insertUser({...dataUser, password: passwordHash})
}

export async function signIn( dataUser:userRepository.ILoginUser ) {
    const { email, password } = dataUser;

}