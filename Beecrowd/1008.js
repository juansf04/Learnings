//Task: Salário com 2 prints no console

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let F = parseInt(lines.shift());
let H = parseInt(lines.shift());
let V = parseFloat(lines.shift());

let S = H * V;

console.log("NUMBER = "+ F);
console.log("SALARY = U$ "+ S.toFixed(2));

//Desta vez saindo do A B C!, idealizando um salário de um funcionário com base nas horas trabalhadas. Emitindo 2 consoles.log com 2 resultados diferentes solicitados pelo beecrowd.

//Finished