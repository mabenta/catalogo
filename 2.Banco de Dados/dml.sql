
USE catalogoFilmesDB;

-- carga inicial usúario admin
INSERT INTO  tb_filme(nm_usuario,ds_email,ds_senha)
VALUES ('admin', 'admin@adim.com.br','1234')

--CSU01::efetuar login
select id_usuario  id,
nm_usuario  nome,
ds_email  email
from tb_usuario
where ds_email  = 'admin@admin.com.br'
and ds_senha  = 'admin';

--CSU02 :: cadastrar novo filme 
INSERT INTO tb_filme(id_usuario,nm_filme,ds_filme,vl_avaliacao,dt_lancamento,bt_disponivel0)
VALUES(1,'HARRY POTTER e a Canara Secreta','Filme bem tops', 8.2 '2012-02-11'true)

--CSU03 :: ALTERAR FILME
UPDATE tb_filme
SET nm_filme = 'HARRY POTTER e a Canara Secreta',
ds_sinopse = 'Filme bem tops',
vl_avaliacao =9.5,
dt_lancamento = '2010-05-03',
bt_disponivel = true,
WHERE id_filme = 1;

-- CSU04: : remover filme
DELETE FROM  tb_filme
WHERE id_filme=1;

--CSU05 : : consutar todos os filmes
SELECT id_filme  id,
nm_filme  nome,
vl_avaliacao avaliacao,
dt_lancamento lancamento,
bt_disponivel disponivel,
FROM  tb_filme;

--CSU06 :: consutar filmes por nome 
SELECT id_filme id,
nm_filme  nome,
vl_avaliacao avaliacao,
bt_lancamento lancamento,
bt_disponivel disponivel
FROM tb_filme 
WHERE nm_filme    LIKE '%a%';


--CSU07 :: consutar filme por id
SELECT id_filme id,
 nm_filme nome,
 vl_avaliacao avaliacao,
 dt_lancamento lancamento,
 bt_disponivel disponivel,
 FROM tb_filme
 WHERE  id_filme  =1;

