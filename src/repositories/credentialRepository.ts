import prisma from "../databases/database";

import { credentials } from "@prisma/client";

export type createCredential = Omit<credentials, "id" | "createdAt" >

export async function createCredential(credentialData: createCredential) {
    await prisma.credentials.create({
        data: credentialData
    })
}