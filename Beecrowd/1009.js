//Task: Salário com Bônus.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let V = lines.shift();
let SF = parseFloat(lines.shift());
let VE = parseFloat(lines.shift());

let R = SF + (VE * 0.15)

console.log("TOTAL = R$ "+ R.toFixed(2))

//Finished