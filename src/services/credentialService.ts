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