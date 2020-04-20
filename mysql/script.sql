create database if not exists wiserchallenge;
use wiserchallenge;

create table if not exists users (
    id int auto_increment,
    email varchar(100),
    password varchar(100),
    primary key (id)
);

insert into users('bmatheusc@gmail.com', '123456');
insert into users('brunoteste@gmail.com', '123456');
insert into users('wiser@gmail.com', '123456');