function crearListaOrdeanda(lista){
    const $listaOrdenada = document.createElement("ol");
    lista.forEach(elemento => {
        const $elemento = document.createElement("li");
        $elemento.textContent = elemento.toString();
        $listaOrdenada.appendChild($elemento);
    })
    return $listaOrdenada;
}

export{
    crearListaOrdeanda
};