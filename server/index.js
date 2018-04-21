const http = require('http'),
      path = require('path'),
      Routing = require('./rutas.js')
      express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session');
      mongoose = require('mongoose');


const PORT = 3000
const app = express()

const Server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.session({ secret: 'zzzzzz', store: store }));
app.use(express.static('client'))

app.use('/Agenda', Routing)

Server.listen(PORT, function(){
  console.log('Server listening: '+PORT);
})
