import * as securityNoteRepository from '../repositories/securityNoteRepository';

import * as error from '../middlewares/errorHandlingMiddleware'

import { encrypt, decrypt } from '../utilities/ecryptUtility';

export async function createSecurityNote (dataSecurityNote: securityNoteRepository.createSecurityNotes) {
    
}

export async function getUserSecurityNotes (userId: number) {
    
}

export async function getSecurityNoteById (userId: number, SecurityNoteId: number) {
    
}

export async function deleteSecurityNote( userId: number, SecurityNoteId:number ) {
    
}
