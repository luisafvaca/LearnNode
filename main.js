var fs = require('fs');
var chalk = require('chalk');

var red = chalk.bold.redBright;
var blue = chalk.bold.blue;

//Llamados a archivos de manera asincrona

fs.readFile('luisa.txt', (err, data) =>{
    if(err) throw err;
    console.log(red('imprimiendo resultado'));
    console.log(blue(data.toString()));
});
