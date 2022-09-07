import prisma from '../databases/database'
import { users } from '@prisma/client';

export type IUser = Omit<users, "id">

export async function insertUser (dataUser: IUser) {
    
    await prisma.users.create({
        data: dataUser
    });

}
export async function findUser (email: string) {
    
    return await prisma.users.findFirst({
        where: {
            email
        }
    });

}