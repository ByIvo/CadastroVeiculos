angular.module('conta-azul').filter('carroFiltro', function () {
    
    var filtroFunc = function (carros, filtro) {
        if (!carros) return;
        
        if (!filtro) {
            return carros;
        }
            
        filtro = filtro.toLowerCase();
        var camposFiltro = Array.prototype.slice.call(arguments, 2);

        return carros.filter(function (carro) {
            return _.some(camposFiltro, function(campoCarro) {
                var valorCampoCarro = carro[campoCarro].toLowerCase();
                return valorCampoCarro.indexOf(filtro) > -1;
            });
        });
    };

    return filtroFunc; 
});