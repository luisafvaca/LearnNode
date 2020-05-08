//Carga de protocolo
var http = require('http');
var url = require('url');
var fs = require('fs');

//Creacion de Servidor
var server = http.createServer((req, res)=>{
    console.log(req.url, 'test');
    var query = url.parse(req.url, true).query;
    
    res.writeHead(200, {'contentType': 'text/html'});
    res.end(`Hola ${query.nombre}`);
   
});

//Qué puerto queremos escuchar?
server.listen(3000)

//output
console.log('Application listen in port ---> 🌍 ---> 3000')

//Nota: esta no es la manera más adecuada, de servir archivos, en el próximo commit subiré el uso de express
