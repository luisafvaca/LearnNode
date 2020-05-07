//Carga de protocolo
var http = require('http');
var fs = require('fs');

//Creacion de Servidor
var server = http.createServer((req, res)=>{
    console.log(req.url, 'test');
    if(req.url === '/'){
        //lectura del archivo de tipo texto
        fs.readFile('./public/index.html', (err, data) => {
            res.writeHead(200, {'contentType': 'text/html'});
            res.end(data);
        }) 
    } else if (req.url === '/images/google-logo.png') {
        //lectura del archivo de tipo imagen
        fs.readFile('./public/images/google-logo.png', (err, data) => {
            res.writeHead(200, {'contentType': 'image/png'});
            res.end(data);
        }) 
    } else {
        //error cuando la url ingresada no existe
        res.writeHead(404, {'contentType': 'text/html'});
        res.end('Url no encontrada');
    }
   
});

//Qué puerto queremos escuchar?
server.listen(3000)

//output
console.log('Application listen in port ---> 🌍 ---> 3000')

//Nota: esta no es la manera más adecuada, de servir archivos, en el próximo commit subiré el uso de express
