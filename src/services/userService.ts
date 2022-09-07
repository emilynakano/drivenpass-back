import bcrypt from 'bcrypt';
import * as userRepository from '../repositories/userRepository'

export async function signUp ( dataUser : userRepository.IUser ) {
    const { password, email, name } = dataUser;

    const passwordHash = await bcrypt.hash(password, 10);
    
}