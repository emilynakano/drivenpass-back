import * as credentialRepository from '../repositories/credentialRepository';

import * as error from '../middlewares/errorHandlingMiddleware'

import { encrypt, decrypt } from '../utilities/ecryptUtility';

export async function createCredential (dataCredential: credentialRepository.createCredential) {
    const { password, title, userId } = dataCredential

    const passwordHash = encrypt(password);

    const credential = await credentialRepository.findByTitleAndUserId(title, userId);
    if(credential) throw error.conflit('title')
   
    await credentialRepository.createCredential({...dataCredential, password: passwordHash })
}

export async function getUserCredentials (userId: number) {
    const credentials = await credentialRepository.findByUserId(userId);

    credentials.forEach((credential) => credential.password = decrypt(credential.password))
    
    return credentials;
}

export async function getCredentialById (userId: number, credentialId: number) {
    const credential = await credentialRepository.findByCredentialId(credentialId);
    if(!credential) throw error.notFound('credential');
    
    if(credential.userId !== userId) throw error.badRequest("another user's credential");
    
    credential.password = decrypt(credential.password);
    
    const {
        id,
        title,
        url,
        username,
        password,
    } = credential

    const dataCredential = {
        id,
        title,
        url,
        username,
        password,
    };
    
    return dataCredential;
}

export async function deleteCredential( userId: number, credentialId:number ) {
    const credential = await credentialRepository.findByCredentialId(credentialId);
    if(!credential) throw error.notFound('credential');
    
    if(credential.userId !== userId) throw error.badRequest("another user's credential");

    
}
