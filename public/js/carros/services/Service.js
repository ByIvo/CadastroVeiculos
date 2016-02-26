angular.module('conta-azul').factory('CarroService',['$q', function($q) {
	
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
	} 
	];

	return {
		all: function() {
			return $q.when(carros);
		}
	};
}]);