const { response } = require("express");
const { createConnection } = require("mysql")
const mysql = require ('mysql')

//mysql pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'interface',
}); //sql connectionD

function getConnection(){ 
    return pool
    console.log("MYSQL is running");
}
// connecting using post method on <forms> from index.html
exports.registration = (req, res) =>  {
    const connection = getConnection()
    console.log("--Trying to create a new user--"),
    console.log ("lastname: " + req.body.lastname),
    console.log ("firstname: " + req.body.firstname),
    console.log ("middleinitial:"  + req.body.middleinitial),
    console.log ("email:"  + req.body.email),
    console.log ("username: " + req.body.username),
    console.log ("password: " + req.body.password),
    console.log ("confirm password: "  + req.body.confirmpassword)
    
    const lastname = req.body.lastname
    const firstname= req.body.firstname
    const middleinitial = req.body.middleinitial
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword
     
    const queryString = "INSERT INTO users (`lastname`,`firstname`,`middleinitial`,`email`,`username`,`password`,`confirmpassword`) VALUES  (?, ?, ?, ?, ?, ?, ?)" 
    getConnection().query(queryString,[lastname,firstname,middleinitial,email,username,password,confirmpassword], (err, results, fields) =>{
        if(err) {
            console.log("Error in query" + err)
            res.sendStatus(500)
            return
        } 
        console.log("Inserted Succesfully ");

        getConnection().query = ("SELECT username FROM users WHERE username = ?", [username],(error, result) => {
        
        if (!err){
            console.log (error)
        }
            if (result.length > 0) {
                return res.render('registration', {
                message: 'username is already in use, create a new one.'
                })
            }
            else if (password !== confirmpassword){
                return res.render('registration', {
                message: 'passwords do not match.'
                    })
                }
            });
    res.render('index');
    })
};

exports.login = (req, res) =>{
    const connection = getConnection()
    const username = req.body.username;
    const password = req.body.password;

    connection.query("SELECT * FROM `users` WHERE `username` = ? AND password = ?", [username,password], (err, results, fields) => {
        if ( results.length>0 ){
            // connection.query("SELECT `student` FROM `users` WHERE `username` = ?", [username], (err, results, fields) => {
            //     if (err){
            //         console.log("Error in query" + err)
            //         res.sendStatus(500)
            //         return
            //     }
           connection.query("SELECT `firstname`, `middleinitial`, `lastname`, `email`, `studentnumber` FROM `users` WHERE `username` = ?", [username], (err, rows, fields) => {
                if(!!err){
                    console.log("Login fail" + err)
                    res.sendStatus(500)
                    res.end
                }
                else{
                    console.log("login succesfully")
                    res.end()
                }
            })
            
        }
    })
} 
