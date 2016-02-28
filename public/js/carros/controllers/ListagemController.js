angular.module('conta-azul').controller('CarroListagemController', 
	['$scope', 'CarroService', '$location', function($scope, CarroService,  $location) {

		$scope.campoOrdenacao = '';
		$scope.desc = false;
		$scope.filtrar = '';
		$scope.carrosExibidos = [];

		$scope.ordenar = function(campo) {
			$scope.campoOrdenacao = campo;
			$scope.desc = !$scope.desc;
		};

		CarroService.all().then(function(carros) {
			$scope.carros = carros;
		});

		$scope.selecionados = CarroService.selecionados();

		$scope.isSelecionado = function(carro) {
			return $scope.selecionados.isSelecionado(carro);
		};

		$scope.isTodosSelecionados = function() {
			return $scope.selecionados.isTodosSelecionados($scope.carrosExibidos);
		};

		$scope.alternarSelecaoGrupo = function() {
			return $scope.selecionados.alternarSelecaoGrupo($scope.carrosExibidos);
		};

		$scope.removerSelecionados = function() {
			CarroService.removerSelecionados().then(function(carroRestantes){
				$scope.carros = carroRestantes;
			});
		};

	}]);