const express = require('express');

const app = express();


const authRoute = require('./routes/auth');

app.use('/api/user', authRoute)

app.listen(3000, ()=> console.log("server is up and running"));