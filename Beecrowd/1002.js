//Task: Imprimir valor da área! o raio tem função

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(input.trim());
var pi = 3.14159;
var area = pi * Math.pow(raio, 2);

console.log("A=" + area.toFixed(4));

// parseFloat(input.trim()) é uma expressão JavaScript que converte uma entrada de usuário em um número de ponto flutuante. Ele remove espaços em branco extras usando trim() e, em seguida, tenta converter a string resultante em um número de ponto flutuante usando parseFloat().

//Finished