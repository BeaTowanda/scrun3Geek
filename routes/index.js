/*var express = require('express');
var router = express.Router();*/

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/
/* para arriba es lo standard ***/

/*aquí viene para GEEK */
var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController');
 
/* GET home page. */
router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/altaPRoductos', mainController.altaProductos);
router.get('/modificaProductos', mainController.modificaProductos);
router.get('/detalleProducto', mainController.detalleProducto);

module.exports = router;
