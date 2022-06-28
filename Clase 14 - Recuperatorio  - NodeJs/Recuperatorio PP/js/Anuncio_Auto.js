import Anuncio from "./Anuncio.js";
export default class Anuncio_Auto extends Anuncio {
    constructor(id, titulo, transaccion, descripcion, precio, puertas, kilometros, potencia, gnc, danios, papeles){
        try {
            super(id, titulo, transaccion, descripcion, precio);
            this.Puertas = puertas;
            this.Kilometros = kilometros;
            this.Potencia = potencia;
            this.GNC = gnc;
            this.Danios = danios;
            this.Papeles = papeles;
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
        if(Number.parseInt(kilometros) || kilometros == 0){
            this.kilometros = kilometros;
        } else {
            throw new Error("Kilometros invalidos");
        }
    }
    set Potencia(potencia) {
        if(Number.parseInt(potencia) && potencia > 0 && potencia < 2000){
            this.potencia = potencia;
        } else {
            throw new Error("Potencia invalida");
        }
    }
    set GNC(gnc){
        if(gnc){
            this.gnc = "Sí";
        } else {
            this.gnc = "No";
        }
    }
    set Danios(danios){
        if(danios){
            this.danios = "Sí";
        }else {
            this.danios = "No";
        }
    }
    set Papeles(papeles){
        if(papeles){
            this.papeles = "Sí";
        }else {
            this.papeles = "No";
        }
    }
}