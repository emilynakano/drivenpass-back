import * as credentialRepository from '../repositories/credentialRepository';

import { encrypt, decrypt } from '../utilities/ecryptUtility';

export function createCredential (dataCredential: credentialRepository.createCredential) {
    const {
        url, 
        username, 
        password, 
        title,
        userId
    } = dataCredential

}