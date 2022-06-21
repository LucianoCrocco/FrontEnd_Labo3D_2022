import Anuncio_Auto from "./Anuncio_Auto.js";
import crearTabla from "./tabla.js"
import {funcionesScript} from "./scripts.js";

/* Elementos del DOM */
const frm = document.getElementById("form-principal");
const btnPrincipal = document.getElementById("btnPrincipal");
const containerTabla = document.getElementById("tabla-container");
const containerBotones = document.getElementById("botones-container");

/* ID general para modificar o eliminar */
let id = null;

/* Lista del LocalStorage y generacion de la tabla */
const autosLista = localStorage.getItem("autos") ? JSON.parse(localStorage.getItem("autos")) : [];
actualizarTabla(autosLista);

/* Boton Guardar, Modificar */
containerBotones.addEventListener("click", (e) => {
    try {
        switch(e.target.textContent){
            case "Guardar":
                altaLista();
                break;
            case "Modificar":
                modificarLista();
                break;
            case "Cancelar":
                cancelarEdicionAuto();
                break;
            case "Eliminar":
                eliminarAuto();
                break;
        }
    } catch(error){
        alert(error);
    }
})

/* Actualizacion de la tabla, creacion de la misma */
function actualizarTabla(lista) {
    if(lista.length > 0){
        const table = crearTabla(lista);
        btnPrincipal.setAttribute("disabled", true);

        if(containerTabla.children.length > 0){
            containerTabla.removeChild(containerTabla.children[0]);
        }
    
        funcionesScript.cargarSpinner();
    
        setTimeout(() => {
            containerTabla.appendChild(table);
            btnPrincipal.removeAttribute("disabled");
            funcionesScript.eliminarSpinner();
        }, 500)
    } else {
        if(containerTabla.children.length > 0){
            containerTabla.removeChild(containerTabla.children[0]);
            funcionesScript.cargarSpinner();
            setTimeout(() => {
                funcionesScript.eliminarSpinner();
            }, 500)
        }
    }
}

/* Alta Auto en la lista y actualizacion tabla */
function altaLista() {
    let nuevoAuto = new Anuncio_Auto(Date.now(), frm.titulo.value, frm.transaccion.value, frm.descripcion.value, frm.precio.value, frm.puertas.value, frm.kilometros.value, frm.potencia.value); 
    autosLista.push(nuevoAuto);

    actualizarTabla(autosLista);
    localStorage.setItem("autos", JSON.stringify(autosLista)); 

    limpiarCamposFrm();
}

/* Modificar Auto en la lista y actualizacion tabla */
function modificarLista(){
    let autoEditado = new Anuncio_Auto(Date.now(), frm.titulo.value, frm.transaccion.value, frm.descripcion.value, frm.precio.value, frm.puertas.value, frm.kilometros.value, frm.potencia.value); 

    autosLista[id] = autoEditado;
    
    actualizarTabla(autosLista);
    localStorage.setItem("autos", JSON.stringify(autosLista)); 

    id = null;
    limpiarCamposFrm();
    btnPrincipal.childNodes[1].textContent = "Guardar"
}

/* Cancelar edicion Auto*/
function cancelarEdicionAuto(){
    funcionesScript.eliminarBotonCancelar();
    funcionesScript.eliminarBotonEliminar();
    id = null;
    btnPrincipal.childNodes[1].textContent = "Guardar";
    limpiarCamposFrm();
}

/* Eliminar Auto*/
function eliminarAuto(){
    if(id){
        autosLista.splice(id, 1);

        id = null;
        btnPrincipal.childNodes[1].textContent = "Guardar";
        localStorage.setItem("autos", JSON.stringify(autosLista)); 
        limpiarCamposFrm();

        funcionesScript.eliminarBotonCancelar();
        funcionesScript.eliminarBotonEliminar();
        actualizarTabla(autosLista);
    }
}

/* Limpiar lista */
const limpiarCamposFrm = () => {
    frm.titulo.value = "";
    frm.transaccion[0].checked = false;
    frm.transaccion[1].checked = false;
    frm.descripcion.value = "";
    frm.precio.value = "";
    frm.puertas.value = "";
    frm.kilometros.value = "";
    frm.potencia.value = "";
}

/* Burbujeo del DOM containerTabla para setear los campos y modificar */
containerTabla.addEventListener("click", (e) => {
    
    if(e.target.matches("tr td")){
        id = e.target.parentElement.getAttribute("data-id");
        
        btnPrincipal.childNodes[1].textContent = "Modificar"

        frm.titulo.value = (e.target.parentElement.children[0].textContent);
        frm.transaccion.value = (e.target.parentElement.children[1].textContent);
        frm.descripcion.value = (e.target.parentElement.children[2].textContent);
        frm.precio.value = (e.target.parentElement.children[3].textContent);
        frm.puertas.value = (e.target.parentElement.children[4].textContent);
        frm.kilometros.value = (e.target.parentElement.children[5].textContent);
        frm.potencia.value = (e.target.parentElement.children[6].textContent);

        if(containerBotones.children.length === 1) {
            funcionesScript.crearBotonEliminar();
            funcionesScript.crearBotonCancelar();
        }
    }
})