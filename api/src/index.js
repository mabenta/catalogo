import 'dotenv/config'

import Controller from './Controller/MulherController.js'
import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());
server.use(Controller);


server.listen(process.env.PORT,
    () => console.log (`API conectada na port ${process.env.PORT}`));