const router = require('express').Router();


router.post('/login', (req, res) => {

    const { username, password } = req.body;

    res.setHeader('Content-Type', 'application/json');
    if(username === 'admin' && password === 'password') {
        res.status(200).send(JSON.stringify({status: 'ok'}));
    } else {
        res.status(401).send(JSON.stringify({status: 'incorrect username or password'}));
    }


});

router.get('/logout', (req,res) => {
    res.setHeader('Content-Type', 'application/json');

    res.send(JSON.stringify({status: 'ok'}));
});


module.exports = router;
