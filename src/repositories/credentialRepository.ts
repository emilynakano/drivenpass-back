import prisma from "../databases/database";

import { credentials } from "@prisma/client";

export type createCredential = Omit<credentials, "id" | "createdAt" >

export async function findByTitleAndUserId (title: string, userId: number) {
    return await prisma.credentials.findFirst({
        where: {
            title,
            userId
        }
    })
}

export async function findByUserId ( userId: number ) {
    return await prisma.credentials.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            userId: false,
            title: true,
            url: true,
            username: true,
            password: true,
            createdAt: false
        }
    })
}

export async function createCredential(credentialData: createCredential) {
    await prisma.credentials.create({
        data: credentialData
    })
}