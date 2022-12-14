import * as networkRepository from '../repositories/networkRepository';

import * as error from '../middlewares/errorHandlingMiddleware'

import { encrypt, decrypt } from '../utilities/ecryptUtility';

export async function createNetwork (dataNetwork: networkRepository.createNetwork) {
    const { password } = dataNetwork

    const passwordHash = encrypt(password);
   
    await networkRepository.createNetwork({...dataNetwork, password: passwordHash })
}

export async function getUserNetworks (userId: number) {
    const networks = await networkRepository.findByUserId(userId);

    networks.forEach((network) => network.password = decrypt(network.password))
    
    return networks;
}

export async function getNetworkById (userId: number, networkId: number) {
    const network = await networkRepository.findByNetworkId(networkId);
   
    if(!network) throw error.notFound('network');
    if(network.userId !== userId) throw error.badRequest("another owner's network!");
    
    const datanetwork = {
        id: network.id,
        title: network.title,
        networkName: network.networkName,
        password: decrypt(network.password),
    };
    
    return datanetwork;
}

export async function deleteNetwork( userId: number, networkId:number ) {
    const network = await networkRepository.findByNetworkId(networkId);
    if(!network) throw error.notFound('network');
    
    if(network.userId !== userId) throw error.badRequest("another owner's network!");

    networkRepository.deleteNetwork(networkId, userId);
}
