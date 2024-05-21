/*var mostrarSite = true
const site = 'SUMPIMPA.COM'

console.log("Hello World");
console.log("Meu nome é Paulo");
console.log("Tmj")

if (mostrarSite){
  console.log(site)    
}
*/

var somaFuncao = require("./calculadora");


function subtrai(valor1, valor2) {
    return valor1 - valor2
}

function mult(valor1, valor2) {
    return valor1 * valor2
}

function div(valor1, valor2) {
    return valor1 / valor2
}

console.log(somaFuncao(10, 20))
console.log(subtrai(10, 20))
console.log(mult(10, 20))
console.log(div(10, 20))