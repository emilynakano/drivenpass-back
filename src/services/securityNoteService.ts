import * as securityNoteRepository from '../repositories/securityNoteRepository';

import * as error from '../middlewares/errorHandlingMiddleware'

export async function createSecurityNote (dataSecurityNote: securityNoteRepository.createSecurityNotes) {
    const {  title, userId } = dataSecurityNote

    const securityNote = await securityNoteRepository.findByTitleAndUserId(title, userId);
    if(securityNote) throw error.conflit('title')
   
    await securityNoteRepository.createSecurityNote(dataSecurityNote)
}

export async function getUserSecurityNotes (userId: number) {
    const securityNotes = await securityNoteRepository.findByUserId(userId);

    return securityNotes;
}

export async function getSecurityNoteById (userId: number, SecurityNoteId: number) {
    const securityNote = await securityNoteRepository.findBySecurityNoteId(SecurityNoteId);
    
    if(!securityNote) throw error.notFound('security note');
    if(securityNote.userId !== userId) throw error.badRequest("another owner's note!");

    const dataSecurityNote = {
        id: securityNote.id,
        title: securityNote.title,
        note: securityNote.note
    };

    return dataSecurityNote
}

export async function deleteSecurityNote( userId: number, SecurityNoteId:number ) {
    const securityNote = await securityNoteRepository.findBySecurityNoteId(SecurityNoteId);
    
    if(!securityNote) throw error.notFound('security note');
    if(securityNote.userId !== userId) throw error.badRequest("another owner's note!");

    await securityNoteRepository.deleteSecurityNote(SecurityNoteId, userId)
}
