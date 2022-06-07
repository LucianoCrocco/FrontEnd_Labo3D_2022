export default class Inmueble {
    constructor(id, titulo, transaccion, descripcion, precio, cntBanios, cntAutos, cntDormitorios){
        this.id = id;
        this.Titulo = titulo;
        this.Transaccion = transaccion;
        this.Descripcion = descripcion;
        this.Precio = precio;
        this.CntBanios = cntBanios;
        this.CntAutos = cntAutos;
        this.CntDormitorios = cntDormitorios;
    }

    set Titulo(titulo) {
        if(isNaN(titulo) && titulo.length > 0){
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
        if(isNaN(descripcion) && descripcion.length > 0){
            this.descripcion = descripcion;
        } else {
            throw new Error("Descripcion invalida");
        }
    }

    set Precio(precio) {
        if(Number.parseFloat(precio)){
            this.precio = precio;
        } else {
            throw new Error("Precio invalido");
        }
    }

    set CntBanios(cntBanios) {
        if(Number.parseInt(cntBanios)){
            this.cntBanios = cntBanios;
        } else {
            throw new Error("Cantidad de baños invalido");
        }
    }

    set CntAutos(cntAutos) {
        if(Number.parseInt(cntAutos)){
            this.cntAutos = cntAutos;
        } else {
            throw new Error("Cantidad de autos invalido");
        }
    }

    set CntDormitorios(cntDormitorios) {
        if(Number.parseInt(cntDormitorios)){
            this.cntDormitorios = cntDormitorios;
        } else {
            throw new Error("Cantidad de dormitorios invalido");
        }
    }
}