//Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

let frase = 'Aprendiendo a programar en Javascript';
let letra = 'a';
let count = 0;

for( let i = 0; i < frase.length; i++){
    if( frase[i].toLowerCase() === letra){
        count ++;
    }
}
console.log(count);

//Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

let numero = 20;

for(let i = numero; i < (numero + 50); i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}