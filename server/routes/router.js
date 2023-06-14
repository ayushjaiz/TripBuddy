const express = require('express');
const route = express.Router();

const userRegisteration = require('../controller/userRegisteration')
const userLogin = require('../controller/userLogin')
const userLogout = require('../controller/userLogout')
const { checkUser } = require('../middleware/auth')

route.get('/', (req, res) => { res.send('hello from the server side '); })

//check user
route.get('*', checkUser);


// user registeration and login
route.post('/user-registeration', userRegisteration)
route.post('/user-login', userLogin)
route.get('/user-logout', userLogout);

module.exports = route;