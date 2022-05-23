const PI = 3.1426;
//Exportar sentencia por sentencia
/*
export function sumar(a, b){
    return a+b;
}

function superficieCincurferencia(radio){
    return radio * radio * PI;
}

export const multiplicar = (a, b) => {
    return a*b;
}
*/
function sumar(a, b){
    return a+b;
}

export default function superficieCincurferencia(radio){
    return radio * radio * PI;
}

const multiplicar = (a, b) => {
    return a*b;
}
//Exportar como objeto

export {
    sumar,
    multiplicar
}

export const obj ={
    sumar : sumar,
    multiplicar : multiplicar
}