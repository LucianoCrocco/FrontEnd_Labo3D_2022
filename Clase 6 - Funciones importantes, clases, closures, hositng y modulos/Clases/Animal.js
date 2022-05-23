class Animal {
    #hambre;
    constructor(tipo, edad, sexo, hambre){
        this.tipo = tipo;
        this.edad = edad;
        this._sexo = sexo;
        this.#hambre = hambre;
    }
        
    get Sexo (){
        return this._sexo;
    }

    set Sexo(value){
        this._sexo = value;
    }

    set Hambre(value){
        this.#hambre = value
    }

    get Hambre(){
        return this.#hambre;
    }

    saludar(){
        return `Hola ${this.nombre}`
    }

    static sumar(a,b){
        return a+b;
    }
}

export default Animal;