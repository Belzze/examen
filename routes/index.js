var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var examenArreglo = [];
var examenEstudiante ={
  nombre:"Jorge Gustavo Hernández Valladares",
  cuenta:"0306199200662",
  correo:"jorge_pw@hotmail.es"
}

var examenNumeros =[];
var examenSuma={
  numero1:"",
  numero2:"",
  respuesta:""
}
  router.get("/cuenta", function(req,res,next){
    res.send(examenEstudiante);
  });

  router.get('/numeros', function(req,res,next){
    res.render('numeros',{});
  });
  router.post('/numeros', function(req,res,next){
    console.log(req.body);
    var newRegistro = Object.assign({},examenSuma);
    newRegistro.numero1 = parseInt( req.body.txtNumero1);
    newRegistro.numero2 = parseInt(req.body.txtNumero2);
    newRegistro.respuesta = newRegistro.numero1 + newRegistro.numero2;
    examenNumeros.push(newRegistro);
    console.log(examenNumeros);
    var data = Object.assign({}, req.body);
    data.nume = examenNumeros;
    res.render('numeros', data);
  });

module.exports = router;
