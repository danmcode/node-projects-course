const express = require('express');
//Registrar parciales
const hbs = require('hbs');

const app = express();
const port = 8080;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estatico
app.use( express.static('public')); 

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Daniel Alexander Muelas',
    titulo: 'Curso de Node'
  });
});

// app.get('/home', (req, res) => {
//     res.send('home');
// });

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

// app.get('*', (req, res) => {
//     //res.send('404 | Page No Found'); //only send plain text to client

//     // send a dirname to client
//     res.sendFile(__dirname + '/public/404.html');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});