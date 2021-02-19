const { createConnection } = require("mysql")


exports.login = (req, res) =>{
    const connection = getConnection()
    const username = req.body.username;
    const password = req.body.password;

    getConnection().query("SELECT * FROM `users` WHERE `username` = ? AND password = ?", [username,password], (err, results, fields) => {
        if (this.login.length>0){
            connection.query("SELECT `studentnumber` FROM `users` WHERE `username` = ?", [username], (err, results, fields) => {
                if (!!err){
                    console.log("Error in query" + err)
                    res.sendStatus(500)
                    return
                }
            getConnection().query("SELECT `firstname', `middleinitial`, `lastname`, `email`, `studentnumber` FROM `users` WHERE `username` = ?", [username], (err, rows, fields) => {
                if(!!err){
                    console.log("Login fail" + err)
                    res.sendStatus(500)
                    return
                }
                else{
                    console.log("login succesfully")
                    res.render ('landing', )
                    res.render('landing', {username, result : rows[0].firstname, result2 : rows[0].middlename, result3 : rows[0].lastname})
                }
            })
            })

        }



    })





    console.log(req.body)
    res.send("Form Submitted")
} 