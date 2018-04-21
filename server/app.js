var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let User = new Schema({
  id:{ type: Number, require: true },
  usuario:{ type: String, require: true },
  password:{ type: String, require: true }
})

mongoose.model('User',User);
mongoose.connect('mongodb://localhost:27017/agenda_db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.session({ secret: 'zzzzzz', store: store }));

app.set('view engine', 'ejs');

app.get('/',function(req,res)
{
    res.render('index');
});


app.post('/login', function(req, res)
{
    // new code should come over here
    User.findOne({usuario: req.body.user, password: req.body.pass}, function(err, user){
        if(err) {
           response = err;
            console.log(err);
        }
        else if(user){
            req.session.usuarioid = req.body.id;
            response = "Validado";
        }
        else {
            response = "Invalido";
        }
    });

});


var server = app.listen(3000, function() {
    console.log('listening on port 3000.');
});
