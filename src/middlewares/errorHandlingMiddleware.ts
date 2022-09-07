import { NextFunction, Response, Request } from 'express';

export function notFound (entity: string) {
    return { type: 'error_not_found', message: `cannot find ${entity}` }
}

export function badRequest (message: string) {
    return { type: 'error_bad_request', message}
}

export function unauthorized (credential: string) {
    return { type: 'error_unauthorized', message: `invalid or non existent ${credential}`}
}

export default function errorHandlingMiddleware (error: any, req: Request, res: Response, next: NextFunction) {
    if (error.type === 'error_not_found') return res.status(404).send(error.message);
    
    if (error.type === 'error_bad_request') return res.status(400).send(error.message);
	
    if(error.type === 'error_unauthorized') return res.status(401).send(error.message);
    
    return res.status(500).send(error);
}