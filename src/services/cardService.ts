import * as cardRepository from '../repositories/cardRepository';

import * as error from '../middlewares/errorHandlingMiddleware'

import { encrypt, decrypt } from '../utilities/ecryptUtility';

export async function createCard (dataCard: cardRepository.createCard) {
    const { password, securityCode, title, userId } = dataCard

    const passwordHash = encrypt(password);
    const securityCodeHash = encrypt(securityCode)

    const card = await cardRepository.findByTitleAndUserId(title, userId);
    if(card) throw error.conflit('title')
   
    await cardRepository.createCard({...dataCard, 
                                        password: passwordHash, 
                                        securityCode: securityCodeHash
                                    })
}

export async function getUserCards (userId: number) {
    const cards = await cardRepository.findByUserId(userId);

    cards.forEach((card) => {
        card.password = decrypt(card.password);
        card.securityCode = decrypt(card.securityCode);
    })
    
    return cards;
}

export async function getCardById (userId: number, cardId: number) {
    const card = await cardRepository.findByCardId(cardId);
   
    if(!card) throw error.notFound('card');
    if(card.userId !== userId) throw error.badRequest("another user's card");
    
    const dataCard = {
        number: card.id,
        title: card.title,
        holderName: card.holderName,
        securityCode: decrypt(card.securityCode),
        expirationDate: card.expirationDate,
        password: decrypt(card.password),
        isVirtual: card.isVirtual,
        type: card.type
    };
    
    return dataCard;
}

export async function deleteCard( userId: number, cardId:number ) {
    const card = await cardRepository.findByCardId(cardId);
    if(!card) throw error.notFound('card');
    
    if(card.userId !== userId) throw error.badRequest("another user's card");

    cardRepository.deleteCard(cardId, userId);
}
