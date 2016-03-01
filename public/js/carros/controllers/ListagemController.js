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

		/*BUSCAR CARROS*/
		CarroService.all().then(function(carros) {
			$scope.carros = carros;
		});

		/*SELECAO DE UM CARRO*/
		$scope.isSelecionado = function(carro) {
			return SelecaoService.isSelecionado(carro);
		};

		$scope.alternarSelecao = function(carro) {
			return SelecaoService.alternarSelecao(carro);
		};

		/*SELECAO GRUPO DE CARROS*/
		$scope.isTodosSelecionados = function() {
			return SelecaoService.isTodosSelecionados($scope.carrosExibidos);
		};

		$scope.alternarSelecaoGrupo = function() {
			return SelecaoService.alternarSelecaoGrupo($scope.carrosExibidos);
		};

		/*EDITAR CARRO*/
		$scope.editar = function(carro) {
			$location.path('/carros/' + carro.placa + "/editar");
		};

		/*DELTAR*/
		$scope.removerSelecionados = function() {

			if(Object.keys(SelecaoService.objetos).length === 0) {
				HelperService.showMensagemErro('Você precisa selecionar ao menos um carro :)');
			}else {
				HelperService.showMensagemConfirmacao("Se você excluir um carro, ele não poderá mais ser recuperado!", function() {
					CarroService.removerSelecionados().then(function(carroRestantes){
						$scope.carros = carroRestantes;
					});
				});
			}
		};
	}]);