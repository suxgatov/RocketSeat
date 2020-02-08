const { Router } = require('express');

const router = new Router();

routes.get('/', (req,res) =>{
  return res.json('Hello World!');
})

module.exports = routes;