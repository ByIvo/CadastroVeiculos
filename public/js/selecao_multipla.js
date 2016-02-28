function SelecaoMultipla(key) {
	this.objetos = {};
	this.key = key || function(k){return k;};
}

SelecaoMultipla.prototype.isSelecionado = function(obj) {
	return this.objetos[this.key(obj)];
};

SelecaoMultipla.prototype.alternarSelecao = function(obj) {
	if(!this.push(obj)) {
		this.remove(obj);
	}
};

SelecaoMultipla.prototype.push = function(obj) {
	if(!this.isSelecionado(obj)){
		this.objetos[this.key(obj)] = obj;
		return true;
	}

	return false;
};

SelecaoMultipla.prototype.remove =  function(obj) {
	if(this.isSelecionado(obj)){
		this.objetos = _.omit(this.objetos , this.key(obj));
		return true;
	}

	return false;
};

SelecaoMultipla.prototype.isTodosSelecionados = function(array) {
	var that = this;
	return _.every(array, function(obj) {
		return that.isSelecionado(obj);
	});
};

SelecaoMultipla.prototype.pushSome = function(objetos) {
	for(var i=objetos.length -1; i >=0; i--) {
		this.push(objetos[i]);
	}
};

SelecaoMultipla.prototype.removeSome = function(objetos) {
	for(var i=objetos.length -1; i >=0; i--) {
		this.remove(objetos[i]);
	}
};

SelecaoMultipla.prototype.limpar = function() {
	this.objetos = {};
};