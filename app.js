// loading app server using express
const express = require("express");
const app = express();
const mysql = require("mysql");
const morgan = require("morgan");
const path = require('path')
const { request } = require("express");


//new packages
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(morgan("short")); //logging

//hbs pathing
const publicDirectrory = path.join(__dirname, './public')
app.use(express.static(publicDirectrory))
app.set('view engine', 'hbs');

//parsing html bodies
app.use(express.urlencoded({extended: false}))
app.use(express.json())                                         //parsing json by API clients

//localhost:2004
app.listen(2004, () => {
    //port and callback function
    console.log("Server is established and listening on port 2004...");
});

//routing
app.use('/auth', require ('./routes/auth'))
const router = require('./routes/users.js') //requiring user.js to be used in this file
app.use('/', require('./routes/pages'))
app.use(router)




