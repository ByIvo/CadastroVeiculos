var Helper = {
	isCarroIgual: function(carro, outro) {
		return carro.placa.toLowerCase() == outro.placa.toLowerCase();
	},

	showMensagemConfirmacao: function(mensagem, acao) {
		swal({
				title: "Você tem certeza?",   
				text: mensagem,   
				type: "warning",   
				showCancelButton: true,
				calcelButtonText: 'Cancelar',
				confirmButtonText: "Continuar",   
				closeOnConfirm: true 
			}, function(){   
				if(acao) {
					acao();
				}
			});
	},

	showMensagemErro: function(mensagem) {
		swal({
				title: "Ops!",   
				text: mensagem,
				type: "error",   
				confirmButtonText: "Fechar"
		});
	},

	showMensagemOk: {}
};

angular.module('conta-azul', ['ngRoute', 'angularUtils.directives.dirPagination']).config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/carros', {
		templateUrl: 'partials/listar_carros.html',
		controller: 'CarroListagemController'
	});

	$routeProvider.when('/carros/novo/:placaCarro/editar', {
		templateUrl: 'partials/form_carro.html',
		controller: 'CarroController'
	});

	$routeProvider.when('/carros/novo', {
		templateUrl: 'partials/form_carro.html',
		controller: 'CarroController'
	});

	$routeProvider.otherwise({
		redirectTo: '/carros'
	});
}]);