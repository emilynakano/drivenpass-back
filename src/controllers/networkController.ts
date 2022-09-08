import { Request, Response } from 'express';

import * as networkService from '../services/networkService'

export async function createNetwork (req: Request, res: Response) {
    const { networkName , password, title } = req.body;
    const userId = res.locals.id;

    const dataNetwork = { 
        networkName, 
        password, 
        title,
        userId: Number(userId)
    }

    await networkService.createNetwork(dataNetwork);
    
    res.status(201).send('network reegistred sucessfully!')
}

export async function getUserNetworks (req: Request, res: Response) {
    const userId = res.locals.id;

    const networks = await networkService.getUserNetworks(userId);

    res.status(200).send(networks)
}

export async function getNetworkById (req: Request, res: Response) {
    const userId = res.locals.id;
    const networkId = req.params.id;

    const network = await networkService.getNetworkById(userId, Number(networkId));

    res.status(200).send(network)
}

export async function deleteNetwork (req: Request, res: Response) {
    const userId = res.locals.id;
    const networkId = req.params.id;

    await networkService.deleteNetwork(userId, Number(networkId));

    res.status(200).send('network deleted sucessfuly!')
}