CREATE DATABASE MULHER_MARAVILHADB ;

use MULHER_MARAVILHADB;

create table tb_mulher_maravilha(
	id_tb_mulher_maravilha	int primary key auto_increment,
    nm_super_heroi 	varchar(100),
    ds_super_poder 	varchar(200),
    bt_voa 			boolean
);

select * from tb_mulher_maravilha;
