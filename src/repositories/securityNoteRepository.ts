import prisma from "../databases/database";

import { securityNotes } from "@prisma/client";

export type createSecurityNotes= Omit<securityNotes, "id" | "createdAt">

export async function findByTitleAndUserId (title: string, userId: number) {
    return await prisma.securityNotes.findFirst({
        where: {
            title,
            userId
        }
    })
}

