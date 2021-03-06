var app = angular.module('conta-azul', ['ngRoute','ngMask','ui.utils.masks', 'angularUtils.directives.dirPagination']);

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/carros', {
		templateUrl: 'partials/listar_carros.html',
		controller: 'CarroListagemController'
	});

	$routeProvider.when('/carros/:placaCarro/editar', {
		templateUrl: 'partials/form_carro.html',
		controller: 'CarroController'
	});

	$routeProvider.when('/carros/novo', {
		templateUrl: 'partials/form_carro.html',
		controller: 'CarroController'
	});

	$routeProvider.otherwise({
		redirectTo: '/carros'
	});
}]);