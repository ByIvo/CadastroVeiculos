app.factory('CarroService',['$q', function($q) {

	var carros = [ 
	{ 
		'combustivel' : 'Flex', 
		'imagem' : null, 
		'marca' : 'Volkswagem', 
		'modelo' : 'Gol', 
		'placa' : 'FFF5498', 
		'valor' : '20000' 
	}, 
	{ 
		'combustivel' : 'Gasolina', 
		'imagem' : null, 
		'marca' : 'Volkswagem',     
		'modelo' : 'Fox', 
		'placa' : 'FOX4125', 
		'valor' : '20000' 
	}, 
	{
		'combustivel' : 'Alcool', 
		'imagem' : 'https://lh4.googleusercontent.com/_AhcQKHf7rM/AAAAAAAAAAI/AAAAAAAAAAA/QMpqL4NYaE/s48ckno/photo.jpg', 
		'marca' : 'Volkswagen', 
		'modelo' : 'Fusca', 
		'placa' : 'PAI4121', 
		'valor' : '20000' 
	},
	{ 
		'combustivel' : 'Flex', 
		'imagem' : null, 
		'marca' : 'Volkswagem', 
		'modelo' : 'Gol', 
		'placa' : 'FFF5410', 
		'valor' : '20000' 
	},
	{ 
		'combustivel' : 'Flex', 
		'imagem' : null, 
		'marca' : 'Volkswagem', 
		'modelo' : 'A1', 
		'placa' : 'CCC', 
		'valor' : '20000' 
	}, 
	{ 
		'combustivel' : 'Flex', 
		'imagem' : null, 
		'marca' : 'Volkswagem', 
		'modelo' : 'A2', 
		'placa' : 'DDD', 
		'valor' : '20000' 
	}, 
	{ 
		'combustivel' : 'Flex', 
		'imagem' : null, 
		'marca' : 'Volkswagem', 
		'modelo' : 'A3', 
		'placa' : 'EEE', 
		'valor' : '20000' 
	}, 
	{ 
		'combustivel' : 'Flex', 
		'imagem' : null, 
		'marca' : 'Volkswagem', 
		'modelo' : 'A4', 
		'placa' : 'FFF', 
		'valor' : '20000' 
	}, 
	{ 
		'combustivel' : 'Flex', 
		'imagem' : null, 
		'marca' : 'Volkswagem', 
		'modelo' : 'A5', 
		'placa' : 'GGG', 
		'valor' : '20000' 
	}, 
	{ 
		'combustivel' : 'Flex', 
		'imagem' : null, 
		'marca' : 'Volkswagem', 
		'modelo' : 'A6', 
		'placa' : 'HHH', 
		'valor' : '20000' 
	}, 
	{ 
		'combustivel' : 'Flexs', 
		'imagem' : null, 
		'marca' : 'Volkswagem',
		'modelo' : 'A7', 
		'placa' : 'III',
		'valor' : '20000' 
	}
	];

	var selecionados = new SelecaoMultipla(function(carro){return carro.placa;});

	var carroService = {
		all: function() {
			return $q.when(carros);
		},

		selecionados: function() {
			return selecionados;
		},

		salvarCarro: function(carro) {
			var deferred = $q.defer();

			if(!carro.placa) {
				deferred.reject('Carro não possui placa!');
			}else {
				carros = _.reject(carros, function(carroLista) {
					return Helper.isCarroIgual(carro, carroLista);
				});

				carros.push(carro);
				deferred.resolve('Carro gravado com sucesso!');
			}

			return deferred.promise;
		},

		removerSelecionados: function() {
			var carrosSelecionados = selecionados.objetos;

			var carrosRestantes = _.reject(carros, function(carro) {
				return _.some(carrosSelecionados, function(carroSelecionado){
					return Helper.isCarroIgual(carroSelecionado, carro);
				});
			});

			carros = carrosRestantes;
			selecionados.limpar();

			return this.all();
		}
	};

	return carroService;

}]);