import * as credentialRepository from '../repositories/credentialRepository';

import * as error from '../middlewares/errorHandlingMiddleware'

import { encrypt, decrypt } from '../utilities/ecryptUtility';

export async function createCredential (dataCredential: credentialRepository.createCredential) {
    const {
        url, 
        username, 
        password, 
        title,
        userId
    } = dataCredential

    const passwordHash = encrypt(password);

    const credential = await credentialRepository.findByTitle(title);
    if(credential) throw error.conflit('title')
   
    await credentialRepository.createCredential({...dataCredential, password: passwordHash })
}