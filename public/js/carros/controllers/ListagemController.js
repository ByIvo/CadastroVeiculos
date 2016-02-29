app.controller('CarroListagemController', 
	['$scope', 'CarroService', 'HelperService', 'SelecaoService', '$location', function($scope, CarroService, HelperService, SelecaoService,$location) {

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

		$scope.isSelecionado = function(carro) {
			return SelecaoService.isSelecionado(carro);
		};

		$scope.isTodosSelecionados = function() {
			return SelecaoService.isTodosSelecionados($scope.carrosExibidos);
		};

		$scope.alternarSelecaoGrupo = function() {
			return SelecaoService.alternarSelecaoGrupo($scope.carrosExibidos);
		};

		$scope.isSelecionado = function(carro) {
			return SelecaoService.isSelecionado(carro);
		};

		$scope.alternarSelecao = function(carro) {
			return SelecaoService.alternarSelecao(carro);
		};

		$scope.editar = function(carro) {
			$location.path('/carros/' + carro.placa + "/editar");
		};

		$scope.removerSelecionados = function() {

			if(Object.keys(SelecaoService.objetos).length === 0) {
				HelperService.showMensagemErro('Você precisa selecionar ao menos um carro :)');
			}else {
				HelperService.showMensagemConfirmacao("Ao deletar um arquivo, ele não poderá mais ser recuperado.", function() {
					CarroService.removerSelecionados().then(function(carroRestantes){
						$scope.carros = carroRestantes;
					});
				});
			}
		};
	}]);