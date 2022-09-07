import prisma from '../databases/database'

export interface IUser {
    name: string;
    email: string;
    password: string;
}

export async function insertUser (dataUser: IUser) {
    const { name, email, password } = dataUser
    //await prisma.users.create({})
}