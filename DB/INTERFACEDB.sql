drop DATABASE interface;
CREATE DATABASE if not exists `interface`;
USE interface;

DROP TABLE USERS;
CREATE TABLE IF NOT EXISTS `users`(

    `lastname` varchar(50),
    `firstname` varchar(50),
    `middleinitial` varchar(5),
    `email` varchar(50),
     `studentnumber` int auto_increment,
    `username` varchar(20),
    `password` varchar(100),
    `confirmpassword` varchar(100),
    primary key (`studentnumber`)
)auto_increment = 2021000;

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
    
insert into `admin`s
values ('admin','admin');
    
truncate table `users`;
INSERT INTO users (`lastname`,`firstname`,`middleinitial`,`email`,`studentnumber`,`username`,`password`,`confirmpassword`)
values ('Suba','Louis','L','cs.subalouis@gmail.com',123456789, 'louissuba','passa123','passa123');
        
SELECT * FROM users;
SELECT * FROM admin;
SELECT * FROM log;
select * from users where username = 'louissuba'
select username, email, firstname, middleinitial, lastname from users where username = 'louissuba';
