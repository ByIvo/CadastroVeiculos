app.controller('CarroController', 
	['$scope','$routeParams','$location', 'CarroService', function($scope, $routeParams,$location, CarroService) {

		if($location.placaCarro) {

		}else {
			$scope.carro = {};
		}

		$scope.carro = {};
		$scope.placaRegex = '\\w{3}-\\d{4}';

		$scope.salvar = function() {
			if($scope.form_carro.$valid) {
				
				CarroService.salvarCarro($scope.carro).then(function(message) {
					$location.path('/');
				});

			}else {
				alert('Form Inválido!!!');
			}
		};
}]);