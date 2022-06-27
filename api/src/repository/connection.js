import mysql2 from 'mysql2/promise'

const con = await mysql2.createConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PWD,
    database:process.env.MYSQL_DB,

    typeCast:(field, next) =>{
        if (field === 'TINY' && field.lenght===1){
            return (field.string==='1');
        } else {
            return next();
        }

    }

})

console.log('BD CONECTADO');

export {con}