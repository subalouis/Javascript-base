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
                message5: "username is already taken",
            });
        } else if (password !== confirmpassword) {
            return res.render('registration', {
                message5: "Passwords do not match",
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
    const { username, password } = req.body; //declaration
    try {
        connection.query("SELECT * FROM `users` WHERE `username` = ? AND `password` = ?", [username, password], async (err, results) => {
            // console.log(results)
            if (results.length <= 0) {
                res.status(401).render('index', {
                    message1: 'username or password is incorrect'
                })
            }

            else {
                connection.query('INSERT INTO `logs` (`username`) VALUES (?)', [username], (error, results) => {
                    connection.query("SELECT `firstname`, `middleinitial`, `lastname`, `studentnumber`, `email` FROM `users` WHERE `username` = ?", [username], (err, rows) => {
                        rows = Object.values(JSON.parse(JSON.stringify(rows)));

                        const fullname = `${rows[0].lastname}, ${rows[0].firstname} ${rows[0].middleinitial}.`;
                        // console.log(fullname)
                        console.log(rows)
                        res.render('dashboard', { fullname: fullname, studentnumber: rows[0].studentnumber, email: rows[0].email });
                    })
                })

            }

        })
    } catch (err) {
        console.log(err)
    }
}

exports.admin = (req, res) => {
    const connection = getConnection();
    const { username, password } = req.body; //declaration
    try {
        connection.query("SELECT * FROM `admin` WHERE `username` = ? ", [username], (err, results) => {
            console.log(results)
            if (results.length <= 0) {
                res.status(401).render('admin', {
                    message3: 'username or password is incorrect'
                })
            }

            else {
                connection.query('INSERT INTO `logs` (`username`) VALUES (?)', [username], (error, results) => {
                    connection.query("SELECT * FROM `logs` ", [username], (err, rows) => {

                        console.log(rows)
                        res.render('logs', { results: rows });
                    })
                })

            }
        })
    } catch (err) {
        console.log(err)
    }
}