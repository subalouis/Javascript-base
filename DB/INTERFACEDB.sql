drop DATABASE interface;
CREATE DATABASE if not exists `interface`;
USE interface;

CREATE TABLE IF NOT EXISTS `users`(
    `lastname` varchar(50) not null,
    `firstname` varchar(50) not null,
    `middleinitial` varchar(5) not null,
    `email` varchar(50) not null,
    `studentnumber` int(10) not null,
    `username` varchar(20)  not null,
    `password` varchar(100) not null,
    `confirmpassword` varchar(100) not null,
    primary key (`studentnumber`)
);

CREATE TABLE IF NOT exists `admin`(
	`username` varchar(20) not null,
    `password` varchar(50) not null,
    primary key (`username`)
    );
    
CREATE TABLE IF NOT exists `log`(
	`username` varchar(50) not null,
	`studentnumber` int(10) not null,
    primary key (`studentnumber`)
    );
    
insert into `admin`
values ('admin','admin');
    
-- truncate table `users`;
-- insert into `users`
-- values ('Suba','Louis','L','cs.subalouis@gmail.com',123456789, 'louissuba','passa123','passa123');
        
SELECT * FROM users;
SELECT * FROM admin;
SELECT * FROM log;
