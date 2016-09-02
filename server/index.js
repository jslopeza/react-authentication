const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
app.use(cors());
router(app);

// Server Setup
const port = process.env.PORT || 3030;
const server = http.createServer(app);
server.listen(port);
console.log('Server Listening on : ' + port);
