angular.module('conta-azul', ['ngRoute']).config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/carros', {
		templateUrl: 'partials/listar_carros.html',
		controller: 'CarroListagemController'
	});
}]);