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


/* Lista del LocalStorage y generacion de la tabla */
const autosLista = localStorage.getItem("autos") ? JSON.parse(localStorage.getItem("autos")) : [];
primeraCarga();

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
            /*case "Cancelar":
                cancelarEdicionAuto();
                break;
            case "Eliminar":
                eliminarAuto();
                break;*/
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
        // funcionesScript.cargarSpinner();
        btnPrincipal.setAttribute("disabled", true);
    
        const res = await fetch(JsonServerURL);

        if(!res.ok){
            //funcionesScript.eliminarSpinner();
            throw Promise.reject(res);
        }


        const lista = await res.json();
        
        if(lista.length > 0){
            const table = crearTabla(lista);
    
            if(containerTabla.children.length > 0){
                containerTabla.removeChild(containerTabla.children[0]);
            }
        
            //Eliminar si continua con setTimout
            containerTabla.appendChild(table);
            /*setTimeout(() => {
                containerTabla.appendChild(table);
                btnPrincipal.removeAttribute("disabled");
                funcionesScript.eliminarSpinner();
            }, 3000)*/
        } else {
            if(containerTabla.children.length > 0){
                containerTabla.removeChild(containerTabla.children[0]);
            }
            /*setTimeout(() => {
                funcionesScript.eliminarSpinner();
            }, 3000)*/
        }
    } catch(err){
        //funcionesScript.eliminarSpinner();
        throw err;
    } finally {
        //Si puedo simluar latencia con el servidor eliminar los timeout y agregar eliminarSpinner aca y btnRemoveAttribute.
        // funcionesScript.eliminarSpinner();
        btnPrincipal.removeAttribute("disabled");
    }
}

/* Alta Auto en la lista y actualizacion tabla*/
async function altaLista() {
    try {
        // funcionesScript.cargarSpinner();
        let nuevoAuto = new Anuncio_Auto(Date.now(), frm.titulo.value, frm.transaccion.value, frm.descripcion.value, frm.precio.value, frm.puertas.value, frm.kilometros.value, frm.potencia.value); 

        const res = await fetch(JsonServerURL, {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(nuevoAuto)
        })

        if(!res.ok){
            throw Promise.reject(res);
        }

        // funcionesScript.eliminarSpinner();
        actualizarTabla();
        //localStorage.setItem("autos", JSON.stringify(autosLista)); 
    
        limpiarCamposFrm();
    } catch(err) {
        throw err;
    } finally {

    }

    /*
    let nuevoAuto = new Anuncio_Auto(Date.now(), frm.titulo.value, frm.transaccion.value, frm.descripcion.value, frm.precio.value, frm.puertas.value, frm.kilometros.value, frm.potencia.value); 
    fetch(JsonServerURL, {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(nuevoAuto)
    })
    .then(res => {
        if(!res.ok){
            return Promise.reject(res);
        }
        return res;
    })
    .then(res => {
        actualizarTabla();
        limpiarCamposFrm();
    })
    .catch(err => {
        alert(err);
    })*/


    //localStorage.setItem("autos", JSON.stringify(autosLista)); 

}

/* Modificar Auto en la lista y actualizacion tabla */
async function modificarLista(){
    try {
        let autoEditado = new Anuncio_Auto(Date.now(), frm.titulo.value, frm.transaccion.value, frm.descripcion.value, frm.precio.value, frm.puertas.value, frm.kilometros.value, frm.potencia.value); 

        const res = await fetch(`${JsonServerURL}/${id}`, {
            method : "PUT",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(autoEditado)
        })

        if(!res.ok){
            throw Promise.reject(res);
        }
        //autosLista[id] = autoEditado;
        
        await actualizarTabla();
        //localStorage.setItem("autos", JSON.stringify(autosLista)); 
    

    } catch(err) {
        //err.catch(err => console.log(err))
        //console.log(err)
        throw err;
    }/*finally {
        id = null;
        limpiarCamposFrm();
        btnPrincipal.childNodes[1].textContent = "Guardar"
    }*/

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

async function primeraCarga(){
    try {
        funcionesScript.cargarSpinner();
        await actualizarTabla();
        funcionesScript.eliminarSpinner();
    } catch(err){
        if(err instanceof Promise){
            err.catch(err => console.log(`${err.status} ${err.statusText}`)); 
        } else {
            alert(err);
        }
    }    
}