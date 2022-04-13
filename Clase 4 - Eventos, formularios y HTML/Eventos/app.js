//Eventos - Esquema de captura y burbuja
const button = document.getElementById("button");
const miDiv = document.getElementById("miDiv");
button.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Boton")
});
miDiv.addEventListener("click", () => console.log("Div"));
document.getElementsByTagName("body")[0].addEventListener("click", () => console.log("Body"), true);

//Evento a traves de propiedades
button.onclick = (e) => console.log("Click en el boton");

//Delegacion de eventos
const btn = document.getElementById("btn");
window.addEventListener("click", (e) => {
    if(e.target.matches("#btn")){
        console.log("Hola");
    }
});

//Otra manera de cargar el codigo JS dentro de la pagina
//window.addEventListener("DOMContentLoaded",() => console.log("Renderizado cargado"));
//window.addEventListener("onload",() => console.log("Renderizado cargado"));