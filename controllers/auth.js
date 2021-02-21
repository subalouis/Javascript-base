const { response } = require("express");
const { createConnection } = require("mysql");
const mysql = require("mysql");

//mysql pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    database: "interface",
}); //sql connectionD

function getConnection() {
    return pool;
    console.log("MYSQL is running");
}
// connecting using post method on <forms> from index.html
exports.registration = (req, res) => {
    const connection = getConnection();
    console.log("--Trying to create a new user--"),
        console.log("lastname: " + req.body.lastname),
        console.log("firstname: " + req.body.firstname),
        console.log("middleinitial:" + req.body.middleinitial),
        console.log("email:" + req.body.email),
        console.log("username: " + req.body.username),
        console.log("password: " + req.body.password),
        console.log("confirm password: " + req.body.confirmpassword);

    const {
        lastname,
        firstname,
        middleinitial,
        email,
        username,
        password,
        confirmpassword,
    } = req.body;

    const queryString = "SELECT username FROM users WHERE username = ?";
    getConnection().query(queryString, [username], async (err, results) => {
        if (err) {
            console.log(err);
        }

        if (results.length > 0) {
            return res.render('registration', {
                message: "username is already taken",
            });
        } else if (password !== confirmpassword) {
            return res.render('registration', {
                message: "Password do not match",
            });
        }

        getConnection().query(
            `INSERT INTO users SET ?`,
            {
                lastname: lastname,
                firstname: firstname,
                middleinitial: middleinitial,
                username: username,
                email: email,
                password: password,
                confirmpassword: confirmpassword,
            },
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                    return res.render("registration", {
                        message: "User registered",
                    });
                }
            }
        );
    });
};

exports.login = (req, res) => {
    const connection = getConnection();
    const { username, password ,studentnumber, firstName, lastName } = req.body; //declaration
        try{
            connection.query ("SELECT * FROM `users` WHERE `username` = ? ",[username], async (err, results) => {
                console.log(results)
                if(!results || password !==results[0].password){
                    res.status(401).render('index', {
                        message1: 'username or password is incorrect'
                    })
                }
                // else if(results || password !==results[0].password){
                //     res.status(401).render('index', {
                //         message1: 'password is incorrect'
                //     })
                // }
                else{
                    connection.query('INSERT INTO logs VALUES (?, ?, current_timestamp())', [firstName, lastName ,username ], (error, res)=>res)
                    console.log(results)
                    res.status(200).redirect('/dashboard')
                }
            }) 
        }catch (err){
                console.log(err)
        } 
}

exports.admin = (req, res) => {
    const connection = getConnection();
    const { username, password } = req.body; //declaration
        try{
            connection.query ("SELECT * FROM `admin` WHERE `username` = ? ",[username], async (err, results) => {
                console.log(results)
                if(!results || password !==results[0].password){
                    res.status(401).render('admin', {
                        message1: 'username or password is incorrect'
                    })
                }
                // else if(results || password !==results[0].password){
                //     res.status(401).render('index', {
                //         message1: 'password is incorrect'
                //     })
                // }
                else{
                    connection.query('INSERT INTO logs VALUES (?, ?, current_timestamp())', [firstName, lastName ,username ], (error, res)=>res)
                    console.log(results)
                    res.status(200).redirect('/logs')
                }
            }) 
        }catch (err){
                console.log(err)
        } 
}