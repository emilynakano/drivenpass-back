import { securityNotes } from "@prisma/client";

export type createSecurityNotes= Omit<securityNotes, "id" | "createdAt">