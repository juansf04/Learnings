//Task: Calcular média, e com pesos entre elas.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);

const PesoA = 3.5;
const PesoB = 7.5;

let M = (A * PesoA + B * PesoB) / (PesoA + PesoB);

console.log("MEDIA = "+ M.toFixed(5));

//.toFixed(5) arredonda um número para ter cinco casas decimais.
//O uso de (lines[0,1]) é para separação de tabela do valor A e B
//O simbolo de divisão é "/"
//Uso de const para determinar os pesos.

//Finished
