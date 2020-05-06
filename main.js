var fs = require('fs');
var resultado = fs.readFileSync('luisa.txt');

console.log(resultado.toString());