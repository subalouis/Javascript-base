// loading app server using express
const express = require('express');
const app = express();
const mysql = require ('mysql');
const morgan = require ('morgan');

var connection = mysql.createConnection({
    //properties
    host: "localhost",
    user: "root",
    password: '',
    database: 'sampleDB'
}); //sql connection

connection.connect(function(error){
    if(!!error){
        console.log("Error");
    } else{
        console.log("Connected");
    }
    
})

app.use(morgan('short'))   ;             //logging

app.get("/", (req, res) => {            //routing
    console.log("Responding to root route")
    res.send("Response from root")
})

app.get("/users", (req, res) => {
    var user1 = {firstname: "Matt", lastname: " 🌵" }
    const user2 = {firstname: "Van", lastname: "Payumo"}
    res.json([user1,user2])

    // res.send("Nodemon auto updates every time I send this file")
})

//localhost:2004
app.listen(2004, () =>  { //port and callback function
    console.log("Server is established and listening on port 2004...")
})