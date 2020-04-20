create database if not exists wiserchallenge;
use wiserchallenge;

create table if not exists users (
    id int auto_increment,
    email varchar(100),
    password varchar(100),
    primary key (id)
);

insert into users value(0, 'bmatheusc@gmail.com', '123456');
insert into users value(0, 'brunoteste@gmail.com', '123456');
insert into users value(0, 'wiser@gmail.com', '123456');