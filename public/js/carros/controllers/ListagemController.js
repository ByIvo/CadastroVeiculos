app.controller('CarroListagemController', 
	['$scope', 'CarroService', '$location', function($scope, CarroService,  $location) {

		$scope.campoOrdenacao = 'placa';
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

			if(Object.keys(CarroService.selecionados().objetos).length === 0) {
				Helper.showMensagemErro('Você precisa selecionar ao menos um carro :)');
			}else {
				Helper.showMensagemConfirmacao("Ao deletar um arquivo, ele não poderá mais ser recuperado.", function() {
					CarroService.removerSelecionados().then(function(carroRestantes){
						$scope.carros = carroRestantes;
					});
				});
			}
		};
	}]);