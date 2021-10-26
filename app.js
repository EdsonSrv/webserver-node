const http = require('http');

const server = http.createServer( (req, resp) => {
  resp.write('Hola Mundo');
  resp.end();
}).listen(8085);

console.log('Escuchando el puerto 8085...');