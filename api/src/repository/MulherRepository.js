import { con} from './connection.js'

export async function adicionar (heroi){
    const comando= 
    
    `insert into tb_mulher_maravilha (nm_super_heroi, ds_super_poder, bt_voa)
    values (?, ?, ?)`
    

    const [resposta]=await con.query (comando, [heroi.nome, heroi.poder, heroi.voa]);
    heroi.id=resposta.insertId;
    return heroi;
}

export async function listadeHerois() {
    const comando =
        `SELECT id_super_heroi        id,
                nm_super_heroi        nome,
                ds_super_poder      poder,
                bt_voa              voa
                FROM tb_mulher_maravilha;`

    const [linhas] = await con.query(comando);
    return linhas;
}