export default class Anuncio {
    constructor(id, titulo, transaccion, descripcion, precio){
        try {
            this.id = id;
            this.Titulo = titulo;
            this.Transaccion = transaccion;
            this.Descripcion = descripcion;
            this.Precio = precio;
        } catch(error) {
            throw error;
        }
    }

    set Titulo(titulo) {
        if(isNaN(titulo) && titulo.length > 0 && titulo.length < 60){
            this.titulo = titulo;
        } else {
            throw new Error("Titulo invalido");
        }
    }

    set Transaccion(transaccion) {
        if(transaccion === "Venta" || transaccion === "Alquiler"){
            this.transaccion = transaccion;
        } else {
            throw new Error("Transaccion invalida");
        }
    }

    set Descripcion(descripcion) {
        if(isNaN(descripcion) && descripcion.length > 0 && descripcion.length < 60){
            this.descripcion = descripcion;
        } else {
            throw new Error("Descripcion invalida");
        }
    }

    set Precio(precio) {
        if(Number.parseFloat(precio) && precio > 0){
            this.precio = precio;
        } else {
            throw new Error("Precio invalido");
        }
    }

}