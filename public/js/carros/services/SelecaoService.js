app.factory('SelecaoService', function() {
	var selecaoMultipla = {

		objetos: {},

		key: function(obj) {
			return obj;
		},

		isSelecionado: function(obj) {
			return this.objetos[this.key(obj)];
		},

		alternarSelecao: function(obj) {
			if(!this.push(obj)) {
				this.remove(obj);
			}
		}, 

		alternarSelecaoGrupo: function(objetos) {
			if(!this.isTodosSelecionados(objetos)) {
				this.pushSome(objetos);
			}else {
				this.removeSome(objetos);
			}
		},

		push: function(obj) {
			if(!this.isSelecionado(obj)){
				this.objetos[this.key(obj)] = obj;
				return true;
			}

			return false;
		},
		remove:  function(obj) {
			if(this.isSelecionado(obj)){
				this.objetos = _.omit(this.objetos , this.key(obj));
				return true;
			}

			return false;
		},

		isTodosSelecionados: function(array) {
			var that = this;
			return _.every(array, function(obj) {
				return that.isSelecionado(obj);
			});
		},

		pushSome: function(objetos) {
			for(var i=objetos.length -1; i >=0; i--) {
				this.push(objetos[i]);
			}
		},


		removeSome: function(objetos) {
			for(var i=objetos.length -1; i >=0; i--) {
				this.remove(objetos[i]);
			}
		},

		limpar: function() {
			this.objetos = {};
		}

	};

	return selecaoMultipla;
});
