import { NextFunction, Request, Response } from "express";

export default function paramMiddleware (req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    if (isNaN(Number(id))) {

        return res.status(400).send('param id must be a number!');

    }

    next()
  
}