import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index'

dotenv.config();

const server = express();

server.use(cors());
server.use(json());

server.use(router);

const PORT:number = Number(process.env.PORT);

server.listen(PORT)