const express = require('express')
const router = express.Router();

//routing to sites
router.get("/", (req, res) => { //main site (localhost:2004)
    //routing
    console.log("Responding to root route");
    // res.send("Response from root");
    res.render('index')
});

router.get('/admin', (req, res) => {
    res.render('admin')
})
router.get('/registration', (req, res) => {
    res.render('registration')
})
router.get('/dashboard', (req, res) => {
    res.render('landing')
})
router.get('logs', (req, res) => {
    res.render('logs')
})
//routing phpmyadmin
router.get('phpmyadmin', (req, res) => {
    res.render('http://localhost/phpmyadmin/sql.php?server=1&db=interface&table=users&pos=0')
})
const router1 = require('./users')
module.exports = router;