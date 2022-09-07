import bcrypt from 'bcrypt';

export async function signUp ( password: string, email: string, name: string ) {
    
    const passwordHash = await bcrypt.hash(password, 10);
    
}