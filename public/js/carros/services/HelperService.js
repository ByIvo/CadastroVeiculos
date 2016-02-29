app.factory('HelperService', function() {

	var helper = {
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

		showMensagemErro: function(mensagem, acao) {
			swal({
				title: "Ops...",   
				text: mensagem,
				type: "error",   
				confirmButtonText: "Fechar"
			}, function(){   
				if(acao) {
					acao();
				}
			});
		},

		showMensagemOk: {}
	};

	return helper;
});