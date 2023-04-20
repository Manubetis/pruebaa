const {Router} = require('express');
const router = Router();

const User = require('../models/User');

router.get('/api', (req, res) => res.send('Hello world'))

router.post('/registro', async (req, res) =>{
    const {email, password} = req.body;
    const nuevoUser = new User({email, password});
    await nuevoUser.save();
    res.send('registro');
})

module.exports = router;