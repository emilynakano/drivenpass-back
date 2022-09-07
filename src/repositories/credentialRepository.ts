import { credentials } from "@prisma/client";

export type createCredential = Omit<credentials, "id" | "userId" | "createdAt" >