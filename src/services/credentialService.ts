import * as credentialRepository from '../repositories/credentialRepository';

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
   
    await credentialRepository.createCredential({...dataCredential, password: passwordHash })
}