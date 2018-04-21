const Router = require('express').Router();

Router.get('all', function(req, res){
  Users.find({}).exec(function(err, docs){
    if(err){
      res.status(500)
      res-json(err)
    }
    res.json(docs)
  })
})

Router.get('/:id', function(req, res){

})

Router.post('/new', function(req, res){
  let user = new Users({
    userId:Math.floor(Math.random()*50),
    nombre: req.body.nombre,
    usuario: req.body.usuario,
    password: req.body.password
  })
  user.save(function(error){
    if(error){
      res.status(500)
      res.json(error)
    }
    res.send("Registro Guardado")
  })
})

Router.get('/delete/:id', function(req, res){

})

Router.get('/inactive/:id', function(req, res){

})

Router.get('active/:id', function(req, res){

})


Router.get('all', function(req, res){

})

module.exports = Router
