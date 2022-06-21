import crearCarta from "./card.js";

const autosLista = localStorage.getItem("autos") ? JSON.parse(localStorage.getItem("autos")) : [];
const cardsContainer = document.querySelector("#cards-container");

autosLista.forEach(element => {
    const card = crearCarta(element);
    cardsContainer.appendChild(card);
});