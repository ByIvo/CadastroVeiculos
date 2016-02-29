app.controller('CarroController', 
	['$scope','$routeParams','$location', 'CarroService', 'HelperService', function($scope, $routeParams,$location, CarroService, HelperService) {

		if($routeParams.placaCarro) {
			CarroService.buscarCarro($routeParams.placaCarro).then(function(carro) {
				$scope.carro = carro;
			}, function(erro) {
				HelperService.showMensagemErro(erro, function() {
					$location.path="#/carros";
				});
			});
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