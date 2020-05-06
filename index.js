//Carga de protocolo
var http = require('http');

//Creacion de Servidor
var server = http.createServer((req, res)=>{
    res.writeHead(200, {'contentType': 'text/html'});
    res.end('<h1>Hola mundo</h1>');
});

//Qué puerto queremos escuchar?
server.listen(3000)

//output
console.log('Application listen in port ---> 🌍 ---> 3000')