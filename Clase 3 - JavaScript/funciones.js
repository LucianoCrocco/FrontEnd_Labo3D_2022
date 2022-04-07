//Funcion declarada
console.log("Funcion declarada");
function saludar(){
    console.log("Hola");
}
saludar();

//Funcion expresada
console.log("\nFuncion expresada");
const unaFuncion = function despedir(){ console.log("Chau nos vemos");}
unaFuncion(); //-> Se ejecuta
//despedir(); //-> No se ejecuta, tenemos que utiliza la constante que la referencia.

function despedirDos(){
    console.log("Chau nos vemos");
}
const unaFuncionDos = despedirDos; //-> Se puede ejecutar tanto la constante como la funcion
despedirDos(); // -> Se ejecuta.
unaFuncionDos(); //Se ejecuta.

//Funcion anonima
console.log("\nFuncion anonima");
const unaFuncionTres = function (){ console.log("Chau nos vemos");}
unaFuncionTres();

//Funcion arrow/lambda
console.log("\nFuncion arrow/lambda");
const unaFuncionCuatro = n => `Chau ${n}`;
const unaFuncionCinco = (x, y) => {return x * y;}

console.log(unaFuncionCuatro("Jose"));
console.log(unaFuncionCinco(10, 2));


//El problema de var
console.log("\nEl problema de var");
for(var i = 0; i < 2; i++){}
console.log(`${i}`);
var i = "Hola";
console.log(`${i}`);

//Se utiliza const para no perder nunca la referencia de un objeto.
console.log("\nSe utiliza const para no perder nunca la referencia de un objeto.");
const constante = "Hola";
console.log(constante);


let numero = [4,5,6,7];
let numero2 = [];

numero2 = numero;
numero.push(8);

console.log(numero);
console.log(numero2);


//Spread Operator
console.log("\nSpread Operator");
const numeros = [1,2,3,4];
const numerosCopiados = [...numeros,10,20];
numerosCopiados.push(5);
console.log(numeros);
console.log(numerosCopiados);

//Rest parameters
console.log("\nRest parameters");
const funcion = (n,m,...r) => {
    console.log(n);
    console.log(m);
    console.log(r);

}
funcion("a", 2, "z", "y", "x", 67);

//Callbacks y asincronismo
console.log("\nCallbacks");
function ejecutoraCallback(queTengoQueEjecutar){
    queTengoQueEjecutar();
}
function sicario(nombre){console.log(`Matar a ${nombre}`);}
function ejecutoraCallbackParam(queTengoQueEjecutar, valor){
    queTengoQueEjecutar(valor);
}

ejecutoraCallback(saludar);
ejecutoraCallback(despedirDos);
ejecutoraCallbackParam(sicario, "Juan");

//saludar();
//despedirDos();
console.log("\nAsincronismo");
console.log("Inicio");
setTimeout(saludar, 3000);
console.log("Fin");


//Eventos
const button = document.getElementById("button");
button.addEventListener("click", handlerClick);
function handlerClick(){
    alert("Hiciste click");
}
//El alert va a provocar que hasta que no confirmemos el alert el callback qeueu no ejecute lo que tiene dentro, en este casoe el settimeout.