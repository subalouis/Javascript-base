-- creating database and table
CREATE DATABASE if not exists `interface`;

CREATE TABLE IF NOT EXISTS `users`(
    `lastname` VARCHAR(50),
    `firstname` VARCHAR(50),
    `middleinitial` VARCHAR(5),
    `email` VARCHAR(50),
     `studentnumber` int auto_increment,
    `username` VARCHAR(20),
    `password` VARCHAR(100),
    `confirmpassword` VARCHAR(100),
    primary key (`studentnumber`)
)auto_increment = 2021000;

CREATE TABLE IF NOT exists `admin`(
	`username` VARCHAR(20) not null,
    `password` VARCHAR(50) not null,
    primary key (`username`)
    );
   
CREATE TABLE IF NOT exists `log`(
	`username` VARCHAR(50) not null,
	`studentnumber` int(10) not null,
    primary key (`studentnumber`)
    );
    
    CREATE TABLE `interface`.`temp` (
    `username` VARCHAR (20) NOT NULL , 
    `datetime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
    );

--using current database
USE interface;  
--dropping database and tables
DROP TABLE `users`;
DROP DATABASE `interface`
    
insert into `admin`
values ('admin','admin');
    
truncate table `users`;
INSERT INTO users (`lastname`,`firstname`,`middleinitial`,`email`,`studentnumber`,`username`,`password`,`confirmpassword`)
values ('Suba','Louis','L','cs.subalouis@gmail.com',123456789, 'louissuba','passa123','passa123');
        
SELECT * FROM users;
SELECT * FROM admin;
SELECT * FROM log;
select * from users where username = 'louissuba'

select username, email, firstname, middleinitial, lastname from users where username = 'louissuba';
