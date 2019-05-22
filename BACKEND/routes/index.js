var express = require('express');
var router = express.Router();
var app = express();

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: 'root',
  port: 5432,
})



/* GET home page. */
app.get('/', function(req, res, next) {
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  res.render('index', { title: 'Express' });
});

//api get data from postgreSql
app.get('/getdata01', function(req, res, next) {
  pool.query('SELECT * FROM product_info', (err, response) => {
    if(err){
      console.log(err)
    }else {
      // console.log(response.rows)
      res.send(response.rows)
    }
    // pool.end()
  })
  // res.render('index', { title: 'Express' });
});

app.get('/add', function(req, res, next){
  res.render('add');
});

app.post('/add', function(req, res, next){
  var product_name = req.body.product_name;
  var product_price = req.body.product_price;
  var image = req.body.image;
  pool.query('INSERT INTO product_info (product_name, product_price, image) values ($1, $2, $3)', [product_name, product_price, image], (err, response) => {
    if(err){
      res.send(err);
    }else {
      // console.log(response.rows)
      res.send('Da insert du lieu thanh cong ' + product_name + product_price + image);
    }
  })
  
});

module.exports = app;
