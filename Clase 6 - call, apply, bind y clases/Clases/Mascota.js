import Animal from "./Animal.js";

class Mascota extends Animal{
    constructor(nombre, tipo, edad, sexo, hambre){
        super(tipo, edad, sexo, hambre);
        this.nombre = nombre;
    }

    saludar(){
        return super.saludar() + ` sos un ${this.tipo}`;
    }
}

export default Mascota;