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
    divSpinner.remove()
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
    btnEliminar.remove();
}

function eliminarBotonCancelar(){
    const btnCancelar = document.getElementById("btnCancelar");
    btnCancelar.remove();
}


function crearAlerta(botonNombre){
    const tableContainer = document.getElementById("tabla-container");
    const alerta = document.createElement("div");
    alerta.setAttribute("id", "box-pop-up");

    switch(botonNombre){
        case "Guardar":
            alerta.setAttribute("class", "colorAlta");
            alerta.textContent = "Guardado realizado correctamente";
            break;
        case "Modificar":
            alerta.setAttribute("class", "colorModificar");
            alerta.textContent = "Modificacion realizada correctamente";
            break;
        case "Eliminar":
            alerta.setAttribute("class", "colorEliminar");
            alerta.textContent = "Eliminacion realizada correctamente";
            break;
    }

    tableContainer.insertAdjacentElement("afterend", alerta);
}

function eliminarAlerta(){
    const alerta = document.getElementById("box-pop-up");
    alerta.remove();
}

export const funcionesScript = {
    cargarSpinner, 
    eliminarSpinner,
    crearBotonCancelar,
    crearBotonEliminar,
    eliminarBotonEliminar,
    eliminarBotonCancelar,
    crearAlerta,
    eliminarAlerta
};