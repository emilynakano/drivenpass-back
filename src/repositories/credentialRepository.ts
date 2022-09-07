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
export async function createCredential(credentialData: createCredential) {
    await prisma.credentials.create({
        data: credentialData
    })
}