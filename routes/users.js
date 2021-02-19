//user related routes
const express = require ('express')
const mysql = require ('mysql')
const router = express.Router()

router.get('/messages', (req,res) => {
    console.log('outputting messages --')
    res.end();    
});

//mysql pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'interface',
}); //sql connectionD

function getConnection(){ 
    return pool
}

const connection = getConnection()
////////////////get/////////////////////////////

router.get("/users", (req, res) => {

     const queryString = "SELECT * FROM users"; //leave ? to fil in
     connection.query(queryString, (err, rows, fields) => {
         if (err) {
             //error return
             console.log("Connection Failed" + err);
             res.sendStatus(500);
             return;
         }
         console.log("Fetched users succesfully");
         res.json(rows);
     });
 });

router.get("/users/:username", (req, res) => {
    getConnection()
    console.log("Fetching user with student number: " + req.params.username);

    const username = req.params.username; //variable for user query
    const queryString = "SELECT * FROM users WHERE username = ?"; //leave ? to fil in
    connection.query(queryString, [username], (err, rows, fields) => {
        if (err) {
            //error return
            console.log("Connection Failed" + err);
            res.sendStatus(500);
            return;
        } 
        console.log("Fetched users succesfully");
        res.json(rows);
    });
    // res.end();
});
const router3 = require ('./post')
module.exports = router