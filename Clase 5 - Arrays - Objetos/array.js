//Arrays
const vec = new Array();
const vec1 = [];

const vec2 = [1,2,3,4,5];
const vec3 = new Array(1,2,3,4,5);

const vec4 = [23, 'Juan', false]; //tupla
const vec5 = [...vec2, ...vec3];
console.log(vec5);

const vec6 = vec2.concat(vec3);

console.log(vec2);

//const vec7 = ["h", "A", "a", "l", "b", "j", "z", "x"];
const vec7 =[1,9,2,3,1,2,545,63,23,4,555];

vec7.sort((a, b)=>{
    return a - b;
});

console.log(vec7);

vec7.forEach((element, index) => {
    if(element == 1){
        vec7[index] = 999;
    }
});
console.log(vec7);

const nombre = "Juan";
console.log(`Hola mi nombre es ${nombre && 'nn'}`);


const numeros = [3,2,5,6,7];

let total = numeros.reduce((prev, actual) =>{
    return prev + actual;
}, 0);

console.log(total);

console.log(numeros.reduce((prev, actual) =>{
    return prev > actual ? prev : actual;
}, 0));

const sinRepetidos = new Set([...numeros]);
console.log(sinRepetidos[1]);


console.log(numeros.every((e) => e > 4));