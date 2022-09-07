import express, {json} from 'express';
import 'express-async-errors'
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/index';

import errorHandlingMiddleware from './middlewares/errorHandlingMiddleware';

dotenv.config();

const server = express();

server.use(cors());
server.use(json());

server.use(router);

server.use(errorHandlingMiddleware);

const PORT:number = Number(process.env.PORT);

server.listen(PORT)