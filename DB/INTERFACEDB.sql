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
   

    
    CREATE TABLE `logs` (
    `username` VARCHAR (20) NOT NULL , 
    `datetime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
    );

-- using current database
USE `interface`;  

-- dropping database and tables
DROP TABLE `users`;
DROP TABLE `admin`;
DROP TABLE `logs`;
DROP DATABASE `interface`;

-- deleting table/database data
TRUNCATE TABLE `users`;
TRUNCATE TABLE `admin`;
TRUNCATE TABLE `logs`;
TRUNCATE DATABASE `interface`
  
-- inserting admin details
insert into `admin`
values ('admin','admin');
    
-- user insertion syntax
INSERT INTO users (`lastname`,`firstname`,`middleinitial`,`email`,`,`username`,`password`,`confirmpassword`)
values ('lastName','firsName','MI','sample@domain.com', 'userName','password1234','passwordConfirm1234');

-- selecting all from tables     
SELECT * FROM users;
SELECT * FROM admin;
SELECT * FROM logs;
select * from users where username = 'louissuba'

-- specific data lookup
SELECT `username`, `email`, `firsname`, `middleinitial`, `lastname` FROM `users` WHERE `username` = 'username';
