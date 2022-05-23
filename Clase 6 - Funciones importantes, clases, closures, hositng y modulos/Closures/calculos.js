const Calculos = (function () {
    const PI = 3.1416;
    function sumar(a, b){
        return a+b;
    }
    
    function superficieCincurferencia(radio){
        return radio * radio * PI;
    }
    
    const multiplicar = (a, b) => {
        return a*b;
    }

    return {
        sumar,
        superficieCincurferencia,
        multiplicar
    }
})();

