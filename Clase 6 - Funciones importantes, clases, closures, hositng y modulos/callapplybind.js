const persona = {
    nombre: 'Juan',
    edad: 20,
    saludar: function() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
        //console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

const miFuncion = persona.saludar;

persona.saludar();

miFuncion.call(persona);

function Animal(tipo, edad, sexo, hambre){
    this.tipo = tipo;
    this.edad = edad;
    this.sexo = sexo;
    this.hambre = hambre;

    Animal.prototype.saludar = function(nombre){
        console.log(`Hola ${nombre}`)
    }
}

function Mascota(nombre, tipo, edad, sexo, hambre){
    this.nombre = nombre;

    Animal.call(this, tipo, edad, sexo, hambre);
}

Object.setPrototypeOf(Mascota.prototype, Animal.prototype);

const mascota = new Mascota("Oliver", "Perro", 2, "M", true);

console.log(mascota);
mascota.saludar(mascota.nombre);

const cat = {
    name:'Mojo',
    speak(sound){
        return `${this.name} says ${sound}`;
    }
}

console.log(cat.speak("Meow"));

const speakCall = cat.speak;
console.log(speakCall.call({name:'CallCat'}, "MeowwwCall"));

const speakApply = cat.speak;
console.log(speakApply.apply({name:'ApplyCat'}, ["MeowwwApply"]));

const speakBind = cat.speak.bind({name : 'BindCat'});
console.log(speakBind("MeowwwBind"));

const Gato = function () { 
    return `${this.nombre}`;
}

function Perro () { 
    return `${this.nombre}`;
}

const Pajaro = () => {
    return `${this.nombre}`;
}

const gatoCall = Gato;
console.log(gatoCall.call({nombre:'gatoCall'}));

const perroCall = Perro;
console.log(perroCall.call({nombre:'perroCall'}));

const pajaroCall = Pajaro;
console.log(pajaroCall.call({nombre:'pajaroCall'}));