app.controller('CarroController', 
	['$scope','$routeParams','$location', 'CarroService', 'HelperService', function($scope, $routeParams,$location, CarroService, HelperService) {

		$scope.carro = {};
		$scope.placaRegex = '\\w{3}-\\d{4}';


		/*VERIFICA EDICAO PARAMS*/
		if($routeParams.placaCarro) {
			CarroService.buscarCarro($routeParams.placaCarro).then(function(carro) {
				$scope.carroEdicao = carro;
				$scope.carro = angular.copy($scope.carroEdicao);
			}, function(erro) {
				HelperService.showMensagemErro(erro, function() {
					$location.path="#/carros";
				});
			});
		}

		/*AÇÕES DE SUBMIT*/
		var novoCarro = function() {
			CarroService.salvarCarro($scope.carro).then(function(message) {
				$location.path('/');
			});
		};

		var editarCarro = function() {
			CarroService.editarCarro($scope.carro,$scope.carroEdicao).then(function(message) {
				$location.path('/');
			});
		};

		/*DEFINE QUAL CAMINHO PERCORRER*/
		$scope.salvar = function() {
			if($scope.form_carro.$valid) {
				if($scope.carroEdicao) {
					editarCarro();
				}else{
					novoCarro();
				}

			}else {
				alert('Form Inválido!!!');
			}
		};
	}]);