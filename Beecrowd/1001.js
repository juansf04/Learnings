//Task: Imprimir valor de "X" sendo, A + B dois valores inteiros armazenados.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

console.log("X = " + (A + B));

//"parseInt(lines.shift())" é uma expressão JavaScript que remove e converte o primeiro elemento de um array (presumivelmente uma string representando um número) em um número inteiro.

//Finished
