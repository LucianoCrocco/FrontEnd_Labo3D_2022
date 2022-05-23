//DOM API
console.log(document.head);
console.log(document.body);
console.log(document.images[0]);
console.log(document.links);
console.log(document.forms);
console.log(document.scripts);
console.log(document.styleSheets);
console.log(document.documentElement);
console.log(document.characterSet);
console.log(document.documentElement.lang);

//Selectores
console.log(document.getElementById("frutas"))
console.log(document.getElementsByClassName("card"));//Deprecado
console.log(document.getElementsByTagName("p"));//Deprecado
console.log(document.getElementsByName("nombre"));//Deprecado

console.log(document.querySelector('#frutas'));
console.log(document.querySelectorAll('.card'));
console.log(document.querySelectorAll("p"));
console.log(document.querySelectorAll("nav a"));

//Atributos
const $linkGoogle = document.querySelector("a");
console.log($linkGoogle);
$linkGoogle.setAttribute("href", "https://google.com.ar")
//$linkGoogle.setAttribute("target", "_blank")
$linkGoogle.target = "_blank"
console.log($linkGoogle.hasAttribute("rel"));
$linkGoogle.setAttribute("rel", "noopener noreferrer nofollow")

if($linkGoogle.hasAttribute("rel")){
    $linkGoogle.removeAttribute("rel");
}

const $titulo = document.querySelector("h1");

console.log($titulo.dataset.description);
console.log($titulo.getAttribute("data-description"));
$titulo.dataset.id = 20;
$titulo.setAttribute("data-id", 30);

console.log($titulo);

const $miDiv = document.querySelector("#miDiv");
const $miParrafo = document.querySelector("#p1");

$miParrafo.textContent="Esto es un parrafo";
$miDiv.innerHTML="<span>Hola esto es un span</span>";

//DOM traversing
const $cards = document.querySelector(".cards"); 
console.log($cards);
console.log($cards.childNodes);
console.log($cards.children);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);

console.log($cards.children[1]);

const $strong = document.querySelector("strong"); 
console.log($strong.closest("div"));

//Creacion DOM
const $figure = document.createElement("figure");
const $imagen = document.createElement("img");
$imagen.setAttribute("src", "https://placeimg.com/300/300/animals");
$imagen.alt = "Imagen de animal";

const $figcaption = document.createElement("figcaption");
const $texto = document.createTextNode("Animal");
$figcaption.appendChild($texto);

$figure.appendChild($imagen);
$figure.appendChild($figcaption);

$cards.appendChild($figure);

//Asignar y remover clases
//$figure.setAttribute("class", "card");
//$figure.className = "card"; Puedo asignarle mas de uno ej: "card rojo". 
$figure.classList.add("card");
$figure.classList.replace("card", "rojo");
$figure.classList.add("pepe");
$figure.classList.remove("rojo");
$figure.classList.add("negro", "blanco", "rotar");

console.log($figure.className);

//Estilos en linea
const $parrafo1 = document.getElementById("parrafo1");
//$parrafo1.style.backgroundColor = "blue";
$parrafo1.setAttribute("style", "background-color: black; color: white;")