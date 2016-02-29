angular.module('conta-azul').controller('CarroController', 
	['$scope','$routeParams', 'CarroService', function($scope, $routeParams, CarroService) {

		$scope.carro = {};
		$scope.placaRegex = '\\w{3}-\\d{4}';

		$scope.salvar = function() {
			$scope.form_carro.$setPristine(false);
		};
}]);