var sanitize = require('mongo-sanitize');

module.exports = function (app) {

  var Sala = app.models.sala;

  var controller = {}

  controller.listaSalas = function(req, res) {
    
    Sala.find().exec()
    .then(
      function(salas) {
         res.json(salas); 
       },
       function(erro) {
         console.error(erro)
         res.status(500).json(erro);
       } 
    );    
  };
  
  controller.obtemSala = function(req, res) {

    var _id = req.params.id;
    Sala.findById(_id).exec()
    .then(
      function(sala) {
        if (!sala) throw new Error("Sala não encontrada");
        res.json(sala)     
      }, 
      function(erro) {
        console.log(erro);
        res.status(404).json(erro)
      }
    );    
  };

  controller.removeSala = function(req, res) { 

    var _id = sanitize(req.params.id);

    Sala.remove({"_id" : _id}).exec()
    .then(
      function() {
        res.end();  
      }, 
      function(erro) {
        return console.error(erro);
      }
    );
  };

  controller.salvaSala = function(req, res) {

  /*  var _id = req.body._id;

    var dados = { 
      "nome" : req.body.nome, 
      "email" : req.body.email, 
      "emergencia" : req.body.emergencia || null
    };

    if(_id) {
     Contato.findByIdAndUpdate(_id, dados).exec()
     .then(
      function(contato) {
        res.json(contato);
      }, 
      function(erro) {
        console.error(erro)
        res.status(500).json(erro);
      }
     );
    } else {
      Contato.create(dados)
      .then(
        function(contato) {
          res.status(201).json(contato);
        }, 
        function(erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
      );
    }*/
  };

  return controller;
};