var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [c1, n1, v1] = lines[0].split(' ').map(Number);
let [c2, n2, v2] = lines[1].split(' ').map(Number);

let t1 = n1 * v1;
let t2 = n2 * v2;
let t3 = t1 + t2;

console.log("VALOR A PAGAR: R$ " + t3.toFixed(2));
