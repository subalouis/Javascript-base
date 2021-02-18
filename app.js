// loading app server using express
const express = require("express");
const app = express();
const mysql = require("mysql");
const morgan = require("morgan");
const { request } = require("express");

const bodyParser = require ('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static("./sites")); //routing ./sites folder
app.use(express.static("./sites/img")); //routing ./img folder
app.use(morgan("short")); //logging

app.post ('/get_data', (req,res) =>{ //connecting using post method on <forms> from index.html
    console.log("--Trying to create a new user--");

    console.log ("lastname: " + req.body.lastname),
    console.log ("firstname: " + req.body.firstname),
    console.log ("middleinitial:"  + req.body.middleinitial),
    console.log ("email:"  + req.body.email),
    console.log ("student number: "  + req.body.studentnumber),
    console.log ("username: " + req.body.username),
    console.log ("password: " + req.body.password),
    console.log ("confirm password: "  + req.body.confirmpassword)
    
    const lastname = req.body.lastname
    const firstname= req.body.firstname
    const middleinitial = req.body.middleinitial
    const email = req.body.email
    const studentnumber = req.body.studentnumber
    const username = req.body.username
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword
    
    const queryString = "INSERT INTO users (username_password"
    getConnection().query

    res.send();
});
function getConnection(){
    return mysql.createConnection({ //sqlconnection
        //properties
        host: "localhost",
        user: "root",
        database: "interface",
    }); //sql connection
}


app.get("/users/:id", (req, res) => {
    getConnection()
    console.log("Fetching user with id " + req.params.id);

    const userid = req.params.id; //variable for user query
    const queryString = "SELECT * FROM users WHERE id = ?"; //leave ? to fil in
    connection.query(queryString, [userid], (err, rows, fields) => {
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

app.get("/", (req, res) => {
    //routing
    console.log("Responding to root route");
    res.send("Response from root");
});

app.get("/users", (req, res) => {
   const connection = getConnection()
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

//localhost:2004
app.listen(2004, () => {
    //port and callback function
    console.log("Server is established and listening on port 2004...");
});
