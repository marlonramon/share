var mongoose = require('mongoose');

module.exports = function() {
  var schema = mongoose.Schema({
    nome: { 
      type: String, 
      required: true
    }, 
    capacidadeMax: {
      type: Number, 
      required: true      
    }
  });

  return mongoose.model('Sala', schema);
};