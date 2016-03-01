app.factory('CarroService',['$q', 'HelperService', 'SelecaoService', function($q, HelperService, SelecaoService) {

	var carros = [ 
	{ 
		'combustivel' : 'Flex', 
		'imagem' : null, 
		'marca' : 'Volkswagem', 
		'modelo' : 'Gol', 
		'placa' : 'FFF-5498', 
		'valor' : 20000 
	}, 
	{ 
		'combustivel' : 'Gasolina', 
		'imagem' : null, 
		'marca' : 'Volkswagem',     
		'modelo' : 'Fox', 
		'placa' : 'FOX-4125', 
		'valor' : 20000
	}, 
	{
		'combustivel' : 'Alcool', 
		'imagem' : 'https://upload.wikimedia.org/wikipedia/commons/6/67/Fusca_1500_frente.jpg', 
		'marca' : 'Volkswagen', 
		'modelo' : 'Fusca', 
		'placa' : 'PAI-4121', 
		'valor' : 20000
	}
	];

	var carroEdicao = {};

	SelecaoService.key = function(carro) {
		return carro.placa;
	};

	var carroService = {
		all: function() {
			return $q.when(carros);
		},

		carroEdicao: function() {
			return carroEdicao;
		},

		selecionados: function() {
			return SelecaoService.objetos;
		},

		buscarCarro: function(placa) {
			var deferred = $q.defer();

			var carroSimulado = {'placa':placa};
			var carroBusca = _.find(carros, function(carro) {
				return HelperService.isCarroIgual(carro, carroSimulado);
			});

			if(carroBusca) {
				deferred.resolve(carroBusca);
			}else {
				deferred.reject('Carro não encontrado :(');
			}

			return deferred.promise;
		},

		validarPromiseCarro: function(carro, funcao) {
			var deferred = $q.defer();

			if(!carro.placa) {
				deferred.reject('Carro não possui placa!');
			}else {
				if(funcao) funcao(deferred);
			}

			return deferred.promise;
		},

		editarCarro: function(novo, velho) {
			var that = this;

			return this.validarPromiseCarro(novo, function(deferred) {
				carros = that.removerCarro(velho);
				carros.push(novo);
				deferred.resolve('Carro gravado com sucesso!');
			});
		},

		removerCarro: function(carro) {
			return _.reject(carros, function(carroLista) {
				return HelperService.isCarroIgual(carro, carroLista);
			});
		},

		salvarCarro: function(carro) {
			return this.validarPromiseCarro(carro, function(deferred) {
				carros.push(carro);
				deferred.resolve('Carro gravado com sucesso!');
			});
		},

		removerSelecionados: function() {
			var carrosSelecionados = SelecaoService.objetos;

			var carrosRestantes = _.reject(carros, function(carro) {
				return _.some(carrosSelecionados, function(carroSelecionado){
					return HelperService.isCarroIgual(carroSelecionado, carro);
				});
			});

			carros = carrosRestantes;
			SelecaoService.limpar();

			return this.all();
		}
	};

	return carroService;

}]);