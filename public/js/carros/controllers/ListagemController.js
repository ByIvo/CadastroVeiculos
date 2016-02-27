angular.module('conta-azul').controller('CarroListagemController', 
	['$scope', 'CarroService', '$location', function($scope, CarroService,  $location) {

		$scope.paginador = CarroService.paginador();
	}]);