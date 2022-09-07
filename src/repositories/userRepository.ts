import prisma from '../databases/database'
import { users } from '@prisma/client';

export type ICreateUser = Omit<users, "id">;
export type ILoginUser = Omit<users, "id" | "name">;

export async function insertUser (dataUser: ICreateUser) {
    
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