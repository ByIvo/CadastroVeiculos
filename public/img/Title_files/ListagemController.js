angular.module('conta-azul').controller('CarroListagemController', 
	['$scope', 'CarroService', '$location', function($scope, CarroService,  $location) {

		$scope.paginador = CarroService.paginador;

		$scope.selecionados = CarroService.selecionados();

		$scope.isSelecionado = function(carro) {
			return $scope.selecionados.isSelecionado(carro);
		};

		$scope.isTodosSelecionados = function() {
			var valoresPagina = $scope.paginador.verPagina();
			return $scope.selecionados.isTodosSelecionados(valoresPagina);
		};

		$scope.removerSelecionados = function() {
			CarroService.removerSelecionados();
		};

	}]);