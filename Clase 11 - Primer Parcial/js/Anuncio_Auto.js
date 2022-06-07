import Anuncio from "./Anuncio.js";
export default class Anuncio_Auto extends Anuncio {
    constructor(id, titulo, transaccion, descripcion, precio, puertas, kilometros, potencia){
        try {
            super(id, titulo, transaccion, descripcion, precio);
            this.Puertas = puertas;
            this.Kilometros = kilometros;
            this.Potencia = potencia;
        } catch(error) {
            throw error;
        }
    }
    set Puertas(puertas) {
        if(Number.parseInt(puertas) && puertas > 2 && puertas < 9){
            this.puertas = puertas;
        } else {
            throw new Error("Puertas invalidas");
        }
    }
    set Kilometros(kilometros) {
        if(Number.parseFloat(kilometros)){
            this.kilometros = kilometros;
        } else {
            throw new Error("Kilometros invalidos");
        }
    }
    set Potencia(potencia) {
        if(Number.parseInt(potencia)){
            this.potencia = potencia;
        } else {
            throw new Error("Potencia invalida");
        }
    }
}