const prompt = require("prompt-sync")();

let lista = []
let numero = 0
let numpar = []
let numimpar = []
while (lista.length <20){
    numero = +prompt('Digite um numero : ')

    lista.push(numero)
    if ( (numero % 2 == 0)){
        numpar.push(numero)
    }
    else{
        numimpar.push(numero)
    }
}
console.log(`\n Os numeros foram :${lista} ,\n Desses numeros esses são os pares : ${numpar},\n E esses foram os impares : ${numimpar} `)

