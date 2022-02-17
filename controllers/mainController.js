const { urlencoded } = require("express");

/*const mainController = {
    index: (req, res) => {
      res.render("index", { about: about, menu: listaPlatos });
    },
    detalle: (req, res) => {
      let plato = listaPlatos.find(plato => plato.id == req.params.menuId);
      console.log(plato)
      res.render("detalleMenu", { plato: plato });
    },
  };*/

const productos= [ {
                  codigo:"01-remera-redondo",
                  nombre:"remera superman",
                  descripcion:"Remera algodón 100 hilos , tipo Peruano, no térmico, manga Corta",
                  /*imagen:url(public/img/remeraSupermanSinFondo.png),*/
                  licencia:"superman",
                  tipo:"Remera manga corta",
                  color:"#00555",
                  talle:"small",
                  precio:8500,
                  cantidad:200,
                  descuento:10, 
},] ;
module.exports=productos;

  const mainController = {
    index: (req, res) => {
        res.render("index"); 
    },
    login: (req, res) => {
    res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    altaProductos: (req, res) => {
        res.render("altaProductos");
    },
    modificaProductos: (req, res) => {
      res.render("modificaProductos");
  },
    detalleProducto:(req,res) =>{
      res.render("detalleProducto")
    },
    productCart:(req,res) =>{
      res.render("productCart")
    },
    productCart2:(req,res) =>{
      res.render("productCart2")
    },
  };
  
  module.exports=mainController;

