/*const obj = {

}*/

const p1 = new Object({nombre:"Juan", edad:20, milanesa:true, "nacio en": "Berazategui"});
const p2 = {nombre:"Ana", edad:21, milanesa:false};
p2.sexo = "F";
console.log(p1);
console.log(p2);

const p3 = Object.assign({}, p1);
const p4 = {}; 
Object.assign(p4, p2);
console.log(p3);
console.log(p4);

console.log(p1["nacio en"]);

console.log(Object.keys(p1));
console.log(Object.values(p1));
console.log(Object.entries(p1));

for (const i of Object.keys(p1)) {
    console.log(i);
}

for (const i of Object.values(p1)) {
    console.log(i);
}

function Persona (){
    this.nombre = "Juan";
    this.sexo = "M";
    this.edad = 30;
    this.milanesa = true;
}

const per1 = new Persona();
console.log(per1);
console.log(p2);

const clone1 = {...p1}; //On the fly
const {nombre:n} = per1;
console.log(n);

function unaFuncion({nombre,edad, sexo}){
    console.log(`Te llamas ${nombre}, tenes ${edad} años y tu sexo es ${sexo}`)
}

Persona.prototype.saludar = function (){
    return `Hola ${this.nombre}`;
};

unaFuncion(per1);

per1.saludar();