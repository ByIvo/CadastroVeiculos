app.factory('HelperService', function() {

	var helper = {
		isCarroIgual: function(carro, outro) {
			return carro.placa.toLowerCase() == outro.placa.toLowerCase();
		},

		showMensagemConfirmacao: function(mensagem, acao) {
			swal({
				title: "Você tem certeza?", 
				text: mensagem,
				allowEscapeKey: true,   
				showCancelButton: true,
				allowOutsideClick: true,
				customClass: 'ca-popup',
				cancelButtonText: 'Cancelar',
				confirmButtonText: "Continuar",
				closeOnConfirm: true
			}, function(){   
				if(acao) acao();
			});
		},

		showMensagemErro: function(mensagem) {
			
		swal({
				title: "Ops...",   
				text: mensagem,
				allowEscapeKey: true,
				allowOutsideClick: true,
				showCancelButton: false,
				showConfirmButton: true,  
				customClass: 'ca-popup',
				closeOnConfirm: true,
				confirmButtonText: "Fechar"
			});
		}
	};

	return helper;
});