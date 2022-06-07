import Anuncio_Auto from "./Anuncio_Auto.js";
import crearTabla from "./tabla.js"


const autosLista = localStorage.getItem("autos") ? JSON.parse(localStorage.getItem("autos")) : [];

primeraCarga();

const btnGuardar = document.getElementById("btnPrincipal");
btnGuardar.addEventListener("click", (e) => {
    const frm = document.forms[0];
    try {
        let nuevoAuto = new Anuncio_Auto(Date.now(), frm.titulo.value, frm.transaccion.value, frm.descripcion.value, frm.precio.value, frm.puertas.value, frm.kilometros.value, frm.potencia.value); 
        autosLista.push(nuevoAuto);
        actualizarTabla(autosLista);
        localStorage.setItem("autos", JSON.stringify(autosLista)); 
    } catch(error){
        alert(error);
    }
})

function actualizarTabla(lista) {
    const container = document.getElementById("tabla-container");
    if(container.children.length > 0 && lista.length > 0){
        const table = crearTabla(lista);
        container.removeChild(container.children[0]);
        container.appendChild(table);
    } else if (lista.length > 0){
        const table = crearTabla(lista);
        container.appendChild(table);
    }     
}

function primeraCarga (){
    setTimeout(() => {
        actualizarTabla(autosLista);
    }, 2000);
}