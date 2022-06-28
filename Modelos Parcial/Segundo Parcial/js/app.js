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

//JSON server URL
const JsonServerURL = "http://localhost:3001/anuncios";

/* Generacion de la tabla */
primeraCarga();

/* Boton Guardar, Modificar */
containerBotones.addEventListener("click", async (e) => {
    try {
        switch(e.target.textContent){
            case "Guardar":
                await altaLista();
                break;
            case "Modificar":
                await modificarLista();
                break;
            case "Cancelar":
                cancelarEdicionAuto();
                break;
            case "Eliminar":
                await eliminarAuto();
                break;
        }
    } catch(err){
        if(err instanceof Promise){
            err.catch(err => alert(`${err.status} ${err.statusText}`)); 
        } else {
            alert(err);
        }
    }
})

/* Actualizacion de la tabla, creacion de la misma */
async function actualizarTabla() {
    try {
        //btnPrincipal.setAttribute("disabled", true);
        funcionesScript.deshabilitarBotonPrincipal();
    
        const res = await fetch(JsonServerURL);

        if(!res.ok){
            throw Promise.reject(res);
        }
        const lista = await res.json();
    
        if(lista.length > 0){
            eliminarTablaDOM();
            crearTablaDOM(lista);
        } else {
            if(containerTabla.children.length > 0){
                containerTabla.removeChild(containerTabla.children[0]);
            }
            eliminarTablaDOM();
        }
    } catch(err){
        throw err;
    } finally {
        // btnPrincipal.removeAttribute("disabled");
        funcionesScript.habilitarBotonPrincipal();
    }
}

function crearTablaDOM(lista){
    const table = crearTabla(lista);
    containerTabla.appendChild(table);
}

function eliminarTablaDOM(){
    if(containerTabla.children.length > 0){
        containerTabla.removeChild(containerTabla.children[0]);
    }
}

/* Alta Auto en la lista y actualizacion tabla*/
async function altaLista() {
    try {
        eliminarTablaDOM();
        funcionesScript.deshabilitarBotonPrincipal();
        funcionesScript.cargarSpinner();
        let nuevoAuto = new Anuncio_Auto(Date.now(), frm.titulo.value, frm.transaccion.value, frm.descripcion.value, frm.precio.value, frm.puertas.value, frm.kilometros.value, frm.potencia.value); 

        const res = await fetch(JsonServerURL, {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(nuevoAuto)
        })

        if(!res.ok){
            throw Promise.reject(res);
        }
    } catch(err) {
        throw err;
    } finally {
        await actualizarTabla();
        funcionesScript.eliminarSpinner();
        limpiarCamposFrm();
    }
}

/* Modificar Auto en la lista y actualizacion tabla */
async function modificarLista(){
    try {
        eliminarTablaDOM();
        funcionesScript.deshabilitarBotonPrincipal();
        funcionesScript.eliminarBotonCancelar();
        funcionesScript.eliminarBotonEliminar();
        funcionesScript.cargarSpinner();
        let autoEditado = new Anuncio_Auto(Date.now(), frm.titulo.value, frm.transaccion.value, frm.descripcion.value, frm.precio.value, frm.puertas.value, frm.kilometros.value, frm.potencia.value); 

        const res = await fetch(`${JsonServerURL}/${id}`, {
            method : "PUT",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(autoEditado)
        })

        if(!res.ok){
            throw Promise.reject(res);
        }
    
    } catch(err) {
        throw err;
    }
    finally {
        id = null;
        limpiarCamposFrm();
        btnPrincipal.childNodes[1].textContent = "Guardar"
        await actualizarTabla();
        funcionesScript.eliminarSpinner();
        limpiarCamposFrm();
    }

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
async function eliminarAuto(){
    if(id){
        try {
            eliminarTablaDOM();
            funcionesScript.eliminarBotonCancelar();
            funcionesScript.eliminarBotonEliminar();
            funcionesScript.deshabilitarBotonPrincipal();
            btnPrincipal.childNodes[1].textContent = "Guardar";

            funcionesScript.cargarSpinner();    
            const res = await fetch(`${JsonServerURL}/${id}`, {
                method : "DELETE",
                headers : {"Content-Type" : "application/json"}
            })
    
            if(!res.ok){
                throw Promise.reject(res);
            }
        
        } catch(err) {
            throw err;
        }
        finally {
            id = null;
            limpiarCamposFrm();
            await actualizarTabla();
            funcionesScript.eliminarSpinner(); 
        }
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

/* Primera carga */
async function primeraCarga(){
    try {
        funcionesScript.cargarSpinner();
        funcionesScript.deshabilitarBotonPrincipal();
        await actualizarTabla();
    } catch(err){
        if(err instanceof Promise){
            err.catch(err => console.log(`${err.status} ${err.statusText}`)); 
        } else {
            alert(err);
        }
    } finally{
        funcionesScript.eliminarSpinner();
    }
}
