const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')

require('./database');

app.use(express.json());

app.use('/',require('./routes/index'))

app.listen(4000);
console.log('Server on port', 4000);