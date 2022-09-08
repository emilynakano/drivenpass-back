import prisma from "../databases/database";

import { networks } from "@prisma/client";

export type createNetwork = Omit<networks, "id" | "createdAt">

const selectedFields = {
    id: true,
    userId: false,
    title: true,
    networkName: true,
    password: true,
    createdAt: false
}

export async function findByTitleAndUserId (title: string, userId: number) {
    return await prisma.networks.findFirst({
        where: {
            title,
            userId
        }
    })
}

export async function findByUserId ( userId: number ) {
    return await prisma.networks.findMany({
        where: {
            userId
        },
        select: selectedFields
    })
}

export async function findByNetworkId ( networkId: number ) {
    return await prisma.networks.findFirst({
        where: {
            id: networkId
        }
    })
}

export async function createNetwork(networkData: createNetwork) {
    await prisma.networks.create({
        data: networkData
    })
}

export async function deleteNetwork(networkId: number, userId: number) {
    await prisma.networks.delete({
        where: {
            id: networkId
        }
    })
}