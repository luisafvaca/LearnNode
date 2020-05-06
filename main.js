var fs = require('fs');
var chalk = require('chalk');

var red = chalk.bold.redBright;
var blue = chalk.bold.blue;
var green = chalk.green;

//Llamados a archivos de manera asincrona

fs.readFile('luisa2.txt', (err, data) =>{
    if(err) throw green(err);
    console.log(red('imprimiendo resultado'));
    console.log(blue(data.toString()));
});
