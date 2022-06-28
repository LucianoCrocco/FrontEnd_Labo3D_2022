function cargarSpinner(){
    //<img src="./assets/__Iphone-spinner-1.gif" alt="Spinner de carga"></img>
    const tableContainer = document.getElementById("tabla-container");

    const divSpinner = document.createElement("div");
    divSpinner.setAttribute("id", "div-spinner");
    divSpinner.setAttribute("class", "centrar");

    const image = document.createElement("img");
    image.setAttribute("src", "./assets/__Iphone-spinner-1.gif");
    image.setAttribute("alt", "Spinner de carga");
    image.setAttribute("id", "spinner-carga");
    divSpinner.appendChild(image);

    tableContainer.insertAdjacentElement("afterend", divSpinner);
}

function eliminarSpinner(){
    const divSpinner = document.getElementById("div-spinner");
    if(divSpinner){
        divSpinner.remove()
    }
}

function crearBotonEliminar(){
    const btnPrincipal = document.getElementById("btnPrincipal");
    const btnEliminar = document.createElement("button");
    btnEliminar.setAttribute("class", "boton");
    btnEliminar.setAttribute("id", "btnEliminar");
    btnEliminar.textContent = "Eliminar";
    
    btnPrincipal.insertAdjacentElement("afterend", btnEliminar);
}

function crearBotonCancelar(){
    const btnPrincipal = document.getElementById("btnPrincipal");
    const btnCancelar = document.createElement("button");
    btnCancelar.setAttribute("class", "boton");
    btnCancelar.setAttribute("id", "btnCancelar");
    btnCancelar.textContent = "Cancelar";
    
    btnPrincipal.insertAdjacentElement("afterend", btnCancelar);
}

function eliminarBotonEliminar(){
    const btnEliminar = document.getElementById("btnEliminar");
    if(btnEliminar){
        btnEliminar.remove();
    }
}

function eliminarBotonCancelar(){
    const btnCancelar = document.getElementById("btnCancelar");
    if(btnCancelar){
        btnCancelar.remove();
    }
}


/* Deshabilita y habilita el boton principal */
function habilitarBotonPrincipal(){
    const btnPrincipal = document.getElementById("btnPrincipal");
    btnPrincipal.removeAttribute("disabled");
}
function deshabilitarBotonPrincipal(){
    const btnPrincipal = document.getElementById("btnPrincipal");
    btnPrincipal.setAttribute("disabled", true);
}

export const funcionesScript = {
    cargarSpinner, 
    eliminarSpinner,
    crearBotonCancelar,
    crearBotonEliminar,
    eliminarBotonEliminar,
    eliminarBotonCancelar,
    habilitarBotonPrincipal,
    deshabilitarBotonPrincipal
};