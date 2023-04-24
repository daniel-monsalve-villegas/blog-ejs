// solicitudes /////////////////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

let date = new Date();
let dia = date.getDate();
let mes = date.getMonth() + 1;
let ano = date.getFullYear();
let fechaCompleta = dia + '/' + mes + '/' + ano;

let entradas = [
  {
    fecha: '3/6/2022',
    titulo: 'Primera entrada',
    contenido:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  },
  {
    fecha: '3/7/2022',
    titulo: 'Segunda entrada',
    contenido:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  },
  {
    fecha: '3/8/2022',
    titulo: 'Tercer entrada',
    contenido:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  },
];

app.route('/').get(function (req, res) {
  res.render('home', { todasEntradas: entradas });
});

app
  .route('/crear')
  .get(function (req, res) {
    res.render('crear', { fecha: fechaCompleta });
  })
  .post(function (req, res) {
    let fechaEntrada = req.body.fechaEntrada;
    let tituloEntrada = req.body.titulo;
    let contenidoEntrada = req.body.contenido;

    let nuevaEntrada = {
      fecha: fechaEntrada,
      titulo: tituloEntrada,
      contenido: contenidoEntrada,
    };

    entradas.push(nuevaEntrada);

    res.redirect('/gracias');
  });

app.get('/nosotros', function (req, res) {
  res.render('nosotros');
});

app.get('/gracias', function (req, res) {
  res.render('gracias');
});

app.listen(3000, function () {
  console.log('servidor iniciado en puerto 3000');
});
