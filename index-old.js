const http = require('http');

const server = http.createServer((req, res) => {


  res.write('Hola Mundo!')
  res.end();
})

server.listen(8080);

console.log('Escuchando el puerto: 8080')
