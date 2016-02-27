function Paginador(array, numItens) {
	if (!array) throw new Error('Informe o array!');
	if (!(array instanceof Array)) throw new Error('Somente arrays são aceitos!');

	this.array = array;
	this.numItens = numItens || 5;
	this.paginaAtual = 1;
	this.totalPaginas= Math.ceil(this.array.length / this.numItens);
	this.totalPaginasArray = new Array(this.totalPaginas);
}

Paginador.prototype.verPagina = function(pagina) {
	pagina = pagina || this.paginaAtual;
	if(pagina < 1){pagina = 1;}
	if(pagina > this.totalPaginas){pagina = this.totalPaginas;}

	this.paginaAtual = pagina;
	console.log('asd');
	return this.array.slice(this.indexInicio(), this.indexFinal());
};

Paginador.prototype.hasProximo = function() {
	return this.paginaAtual < this.totalPaginas;
};

Paginador.prototype.hasAnterior = function() {
	return this.paginaAtual > 1;
};

Paginador.prototype.proximo = function() {
	if(this.hasProximo) {
		this.paginaAtual++;
	}

	return this.verPagina(this.paginaAtual);
};

Paginador.prototype.anterior = function() {
	if(this.hasAnterior) {
		this.paginaAtual--;
	}

	return this.verPagina(this.paginaAtual);
};

Paginador.prototype.indexInicio = function() {
	return (this.paginaAtual - 1) * this.numItens;
};

Paginador.prototype.indexFinal = function() {
	return this.indexInicio() + this.numItens; 
};