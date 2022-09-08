import prisma from "../databases/database";

import { cards } from "@prisma/client";

export type createCard = Omit<cards, "id" | "createdAt" >

const selectedFields = {
    id: true,
    userId: false,
    number: true,
    title: true,
    holderName: true,
    securityCode: true,
    expirationDate: true,
    password: true,
    isVirtual: true,
    type: true,
    createdAt: false
}

export async function findByTitleAndUserId (title: string, userId: number) {
    return await prisma.cards.findFirst({
        where: {
            title,
            userId
        }
    })
}

export async function findByUserId ( userId: number ) {
    return await prisma.cards.findMany({
        where: {
            userId
        },
        select: selectedFields
    })
}

export async function findByCardId ( cardId: number ) {
    return await prisma.cards.findFirst({
        where: {
            id: cardId
        }
    })
}

export async function createCard(cardData: createCard) {
    await prisma.cards.create({
        data: cardData
    })
}

export async function deleteCard(cardId: number, userId: number) {
    await prisma.cards.delete({
        where: {
            id: cardId
        }
    })
}