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
    console.log("MYSQL is running")
}


////////////////////posts/////////////////////////////////
router.post ('/get_data', (req,res) =>{ //connecting using post method on <forms> from index.html
    const connection = getConnection()
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
     
    const queryString = "INSERT INTO users (`lastname`,`firstname`,`middleinitial`,`email`,`studentnumber`,`username`,`password`,`confirmpassword`) VALUES  (?, ?, ?, ?, ?, ?, ?, ?)" 
    getConnection().query(queryString,[lastname,firstname,middleinitial,email,studentnumber,username,password,confirmpassword], (err, results, fields) =>{
        if(err) {
            console.log("Error in query" + err)
            res.sendStatus(500)
            return
        }
        console.log("Inserted Succesfully with id: ", results.insertedId);
        res.end();
    }) 
    res.end();
});
const router2 = require('./users')
module.exports = router