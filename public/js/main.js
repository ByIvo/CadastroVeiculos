angular.module('conta-azul', ['ngRoute']).config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/carros', {
		templateUrl: 'partials/listar_carros.html',
		controller: 'CarroListagemController'
	});

	$routeProvider.when('/carros/novo', {
		templateUrl: 'partials/form_carro.html',
		controller: 'CarroController'
	});
}]);

_.mixin({
	filtrarCarros: function(carros, filtro) {
		if(!filtro) {
			return [];
		}

		return _.filter(carros, function(carro) {
			return carro.combustivel.contains(filtro) || carro.marca.contains(filtro);
		});
	}
});