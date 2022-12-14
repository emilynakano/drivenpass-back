import prisma from "../databases/database";

import { securityNotes } from "@prisma/client";

export type createSecurityNotes= Omit<securityNotes, "id" | "createdAt">

const selectedFields = {
    id: true,
    userId: false,
    title: true,
    note: true,
    createdAt: false,
}

export async function findByTitleAndUserId (title: string, userId: number) {
    return await prisma.securityNotes.findFirst({
        where: {
            title,
            userId
        }
    })
}

export async function findByUserId ( userId: number ) {
    return await prisma.securityNotes.findMany({
        where: {
            userId
        },
        select: selectedFields
    })
}

export async function findBySecurityNoteId ( securityNote: number ) {
    return await prisma.securityNotes.findFirst({
        where: {
            id: securityNote
        }
    })
}

export async function createSecurityNote(securityNoteData: createSecurityNotes) {
    await prisma.securityNotes.create({
        data: securityNoteData
    })
}

export async function deleteSecurityNote(securityNoteId: number, userId: number) {
    await prisma.securityNotes.delete({
        where: {
            id: securityNoteId
        }
    })
}