export interface IUser {
    name: string;
    email: string;
    password: string;
}

function insertUser (dataUser: IUser) {
    const { email, password } = dataUser
}