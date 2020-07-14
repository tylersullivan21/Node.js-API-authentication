const router = require('express').Router();

router.post('/register', (req, res) =>{

    res.send('There is info here');
})

router.post('/login');

module.exports = router;