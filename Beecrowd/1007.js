//Task: Valor da diferença A B C D.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());
let D = parseInt(lines.shift());

let Dif = (A * B - C * D);

console.log("DIFERENCA = "+ Dif);

//Formula da diferença (A * B - C * D)

//Finished
