import {adicionar, listadeHerois} from '../repository/MulherRepository.js'
import { Router } from 'express'
const server=Router();

server.post('/heroi' , async (req, resp) => {
    try {
        const infoHero = req.body;

        if (!infoHero.nome)
            throw new Error('Nome do herói é obrigatório!');
        
        if (!infoHero.poder)
            throw new Error('Descrição do herói é obrigatória!');
        
        if (infoHero.voa == undefined || infoHero.voa < 0)
            throw new Error('Informe se o herói voa ou não!');

        const addHero = await adicionar (infoHero);
        resp.send(addHero);

    } catch (err) {
        resp.status(400).send({erro:err.message});
    }
})

server.get('/heroi' , async (req, resp) => {
    try {
        const resposta = await listadeHerois();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        });
    }
})

export default server;