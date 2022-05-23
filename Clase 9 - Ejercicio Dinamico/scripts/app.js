import {crearListaOrdeanda} from "./lista.js";
import {empleados} from "../data/empleados.js";
import { Empleado } from "./empleado.js";
import crearTabla from "./tabla.js";

/* Listas */
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
const $listaContainer = document.querySelector(".lista-container");
const $lista = crearListaOrdeanda(dias);
$listaContainer.appendChild($lista);

/* Tabla */
const $tabla = crearTabla(empleados);
const tablaContainer = document.querySelector(".tabla-container");
tablaContainer.appendChild($tabla); 
window.addEventListener("click", e => {
    if(e.target.matches("tr td")){
        //console.log(e.target.parentElement.dataset.id);
        console.log(e.target.parentElement.getAttribute("data-id"));
    }
})

/* Formulario */

//const empleados = localStorage.getItem("empleados") ? JSON.parse(localStorage.getItem("empleados")) : [];
const empleadosLista = localStorage.getItem("empleados") || [];
const $frmEmpleado = document.forms[0];
$frmEmpleado.addEventListener("submit", e => {
    e.preventDefault();
    const frm = e.target;
    //Validar los datos del formulario

    //alta 
    const nuevoEmpleado = new Empleado(Date.now(), frm.nombre.value, frm.edad.value, frm.email.value, frm.genero);
    empleados.push(empleadosLista);
    localStorage.setItem("empleados",JSON.stringify(nuevoEmpleado));
    actualizarTabla(empleados);
    //modificacion
})

function actualizarTabla(lista) {
    const contanier = document.querySelector(".tabla-container");
    while(contanier.chidren > 0){
        contanier.removeChild(container.firstElementChild);
    }
    contanier.appendChild(crearTabla(lista));
}