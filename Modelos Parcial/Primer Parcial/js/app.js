import Inmueble from "../data/inmueble.js";
import crearTabla from "./tabla.js";


/* Formulario */
const inmuebleLista = localStorage.getItem("inmuebles") ? JSON.parse(localStorage.getItem("inmuebles")) : [];
actualizarTabla(inmuebleLista);
const formInmueble = document.getElementById("form-principal");
let id = null;

formInmueble.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = e.submitter;
    //console.log(btn.textContent);
    //const frm = e.target;
    const frm = document.getElementById("form-principal");

    try{
        switch(btn.textContent) {
            case "Guardar":
                let nuevoInmueble = new Inmueble(Date.now(), frm.titulo.value, frm.transaccion.value, frm.descripcion.value, frm.precio.value, frm.cntBanios.value, frm.cntAutos.value, frm.cntDormitorios.value); 
                inmuebleLista.push(nuevoInmueble);
                actualizarTabla(inmuebleLista);
                localStorage.setItem("inmuebles", JSON.stringify(inmuebleLista)); 
                break;
            case "Modificar": 
                inmuebleLista[id] =  new Inmueble(Date.now(), frm.titulo.value, frm.transaccion.value, frm.descripcion.value, frm.precio.value, frm.cntBanios.value, frm.cntAutos.value, frm.cntDormitorios.value);
                actualizarTabla(inmuebleLista);
                localStorage.setItem("inmuebles", JSON.stringify(inmuebleLista)); 
                break;
            case "Eliminar":
                if (id > -1) {
                    inmuebleLista.splice(id, 1);
                }
                actualizarTabla(inmuebleLista);
                localStorage.setItem("inmuebles", JSON.stringify(inmuebleLista)); 
                break;
            case "Cancelar":
                const buttonGuardar = document.querySelector("#buttons .btn-guardar");
                const buttonEliminar = document.querySelector("#buttons .btn-eliminar");
                const buttonCancelar = document.querySelector("#buttons .btn-cancelar");

                frm.titulo.value = "";
                frm.transaccion.value = "";
                frm.descripcion.value = "";
                frm.precio.value = "";
                frm.cntAutos.value = "";
                frm.cntBanios.value = "";
                frm.cntDormitorios.value = "";
        
                buttonGuardar.textContent = "Guardar";
                buttonEliminar.disabled = true
                buttonCancelar.disabled = true
                break;
        }
    }catch(error){
        alert(error.message);
    }
})

function actualizarTabla(lista) {
    const container = document.getElementById("table-container");
    if(container.children.length > 0 && lista.length > 0){
        const table = crearTabla(lista);
        container.removeChild(container.children[0]);
        container.appendChild(table);
    } else if (lista.length > 0){
        const table = crearTabla(lista);
        container.appendChild(table);
    } 
}

/* Tabla */
window.addEventListener("click", e => {
    if(e.target.matches("tr td")){
        const frm = document.getElementById("form-principal");
        const buttonGuardar = document.querySelector("#buttons .btn-guardar");
        const buttonEliminar = document.querySelector("#buttons .btn-eliminar");
        const buttonCancelar = document.querySelector("#buttons .btn-cancelar");

        buttonGuardar.textContent = "Modificar";
        buttonEliminar.disabled = false
        buttonCancelar.disabled = false

        id = e.target.parentElement.getAttribute("data-id");
        frm.titulo.value = (e.target.parentElement.children[0].textContent);
        frm.transaccion.value = (e.target.parentElement.children[1].textContent);
        frm.descripcion.value = (e.target.parentElement.children[2].textContent);
        frm.precio.value = (e.target.parentElement.children[3].textContent);
        frm.cntAutos.value = (e.target.parentElement.children[4].textContent);
        frm.cntBanios.value = (e.target.parentElement.children[5].textContent);
        frm.cntDormitorios.value = (e.target.parentElement.children[6].textContent);
        
    }
})