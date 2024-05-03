//Task: Média 2, Valores A B e C.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0]);
let B = parseFloat(lines[1]);
let C = parseFloat(lines[2]);

const PesoA = 2;
const PesoB = 3;
const PesoC = 5;

let M = (A * PesoA + B * PesoB + C * PesoC) / (PesoA + PesoB + PesoC);

console.log("MEDIA = "+ M.toFixed(1));

//M.toFixed(1) para atribuir apenas uma casa decimal solicitado no enunciado
//Atentar sempre a sintaxe do codigo!!

//Finished