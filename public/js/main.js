var Helper = {
	isCarroIgual: function(carro, outro) {
		return carro.placa.toLowerCase() == outro.placa.toLowerCase();
	}
};

angular.module('conta-azul', ['ngRoute', 'angularUtils.directives.dirPagination']).config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/carros', {
		templateUrl: 'partials/listar_carros.html',
		controller: 'CarroListagemController'
	});

	$routeProvider.when('/carros/novo', {
		templateUrl: 'partials/form_carro.html',
		controller: 'CarroController'
	});
}]);