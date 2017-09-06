const router = require('express').Router();
const path = require('path');


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

//Get the json file upon GET REQUEST.
router.get(/^\/.*\.json$/, (req, res) => {
    const jsonFile = req.url.slice(req.url.lastIndexOf('/') + 1);
    res.sendFile(path.join(__dirname, jsonFile));
});

module.exports = router;
