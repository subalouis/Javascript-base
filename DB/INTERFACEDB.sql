-- using current database
USE interface;  

-- creating database and table
CREATE DATABASE if not exists `interface`;

CREATE TABLE IF NOT EXISTS `users`(
    `lastname` VARCHAR(50),
    `firstname` VARCHAR(50),
    `middleinitial` VARCHAR(5),
	`studentnumber` INT NOT NULL,
    `email` VARCHAR(50),
    `username` VARCHAR(20),
    `password` VARCHAR(100),
    `confirmpassword` VARCHAR(100),
    primary key (`studentnumber`)
);

CREATE TABLE IF NOT exists `admin`(
	`username` VARCHAR(20) not null,
    `password` VARCHAR(50) not null,
    primary key (`username`)
    );
    
CREATE TABLE `logs` (
    `username` VARCHAR (20),
    `studentnumber` INT,
    `datetime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`username`) REFERENCES `admin` (`username`),
    FOREIGN KEY (`studentnumber`) REFERENCES `users` (`studentnumber`)
    );
    
-- using current database
USE `interface`;  

-- dropping database and tables
DROP DATABASE `interface`;

DROP TABLE `users`;
DROP TABLE `admin`;
DROP TABLE `logs`;

-- deleting table data only
TRUNCATE TABLE `users`;
TRUNCATE TABLE `admin`;
TRUNCATE TABLE `logs`;
  
-- inserting admin details
INSERT INTO `admin`
values ('admin','admin');
    
-- manual insertion
INSERT INTO users (`lastname`,`firstname`,`middleinitial`,`email`,`studentnumber`,`username`,`password`,`confirmpassword`)
VALUES ('Suba','Louis','L','cs.subalouis@gmail.com',123456789, 'louissuba','passa123','passa123');
        
SELECT * FROM users;
SELECT * FROM admin;
SELECT * FROM logs;
select * from users where username = 'louissuba';

-- user insertion syntax
INSERT INTO `users` (`lastname`,`firstname`,`middleinitial`,`email`,`username`,`password`,`confirmpassword`)
values ('lastName','firsName','MI','sample@domain.com', 'userName','password1234','passwordConfirm1234');


-- selecting all from tables  
   
SELECT * FROM users;
SELECT * FROM admin;
SELECT * FROM log;
SELECT * FROM logs;
SELECT * from users where username = 'louissuba';

-- specific data lookup
SELECT `username`, `email`, `firsname`, `middleinitial`, `lastname` FROM `users` WHERE `username` = 'username';
SELECT username FROM users WHERE username = ?; -- registration username check
SELECT * FROM `users` WHERE `username` = ? AND `password` = ?; -- user login password/username check
INSERT INTO `logs` (`studentnumber`) VALUES (?); -- inserting user login into logs table
SELECT * FROM `admin` WHERE `username` = ? AND password = ?; -- admin username and password check


