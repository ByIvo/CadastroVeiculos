angular.module('conta-azul').controller('CarroListagemController', 
	['$scope', 'CarroService', '$location', function($scope, $location, CarroService) {

		CarroService.all().then(function(carros) {
			$scope.carros = carros;
		});
	}]);