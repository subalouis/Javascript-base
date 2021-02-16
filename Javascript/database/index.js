const express = require ("express");
const mysql = require ("MySQL");

//creating a connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234"
});

con.connect (function(err){
    if (err) throw err;
    console.log("Connected!");
});

