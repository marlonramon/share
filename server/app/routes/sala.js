/*function verificaAutenticacao(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status('401').json('Não autorizado');
  }
}*/

module.exports = function (app) {
	
  var controller = app.controllers.sala;

  app.route('/salas')
  	.get(controller.listaSalas)
  	.post(controller.salvaSala)

  app.route('/salas/:id')
	.get(controller.obtemSala)
	.delete(controller.removeSala);
};
