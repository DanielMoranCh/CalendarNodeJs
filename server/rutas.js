const Router = require('express').Router();

Router.get('all', function(req, res){
  Agenda.find({}).exec(function(err, docs){
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
  if(req.body.allDay == false){
  let agenda = new Agenda({
    Id:Math.floor(Math.random()*50),
    userId:session.usuarioid,
    titulo: req.body.titulo,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    start_hour: req.body.start_hour,
    end_hour: req.body.end_hour,
    allDay: req.body.allDay,
  })
}else{
let agenda = new Agenda({
  Id:Math.floor(Math.random()*50),
  userId: session.usuarioid,
  titulo: req.body.titulo,
  start_date: req.body.start_date,
  end_date: req.body.start_date,
  start_hour: '8:30',
  end_hour:'17:00',
  allDay: req.body.allDay,
})
}
  user.save(function(error){
    if(error){
      res.status(500)
      res.json(error)
    }
    res.send("Registro Guardado")
  })
})

Router.get('/delete/:id', function(req, res){
  User.findOne({id: req.params.id, function(err, agenda){
      if(err) {
         response = err;
          console.log(err);
      }
      else if(agenda){
        Agenda.remove({id: req.params.id}, function(error){
              if(error){
                 res.send('Error al intentar eliminar registro.');
              }else{
                 res.redirect('/main');
              }
           });

          response = "Validado";
      }
      else {
          response = "Invalido";
      }
  });
})


module.exports = Router
