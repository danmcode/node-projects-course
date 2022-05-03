const http = require('http');

http.createServer( (req, res) => {
    console.log(req);

    //res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    // res.writeHead(200, { 'Content-Type': 'application/json'});

    //Elements for write
    // res.write('id,nombre\n');
    // res.write('1,Daniel\n');
    // res.write('2,Alex\n');
    // res.write('3,Liliana\n');
    // res.write('4,Ingrid\n');

    res.write('Hello World');
    res.end();

}).listen(8080);

console.log('Escuchando el puerto', 8080);