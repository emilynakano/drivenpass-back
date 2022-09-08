import * as securityNoteRepository from '../repositories/securityNoteRepository';

import * as error from '../middlewares/errorHandlingMiddleware'

import { encrypt, decrypt } from '../utilities/ecryptUtility';

export async function createSecurityNote (dataSecurityNote: securityNoteRepository.createSecurityNotes) {
    const {  title, userId } = dataSecurityNote

    const securityNote = await securityNoteRepository.findByTitleAndUserId(title, userId);
    if(securityNote) throw error.conflit('title')
   
    await securityNoteRepository.createSecurityNote(dataSecurityNote)
}

export async function getUserSecurityNotes (userId: number) {
    
}

export async function getSecurityNoteById (userId: number, SecurityNoteId: number) {
    
}

export async function deleteSecurityNote( userId: number, SecurityNoteId:number ) {
    
}
