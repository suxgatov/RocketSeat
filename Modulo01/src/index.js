const express = require('express');

const server = express();

server.use(express.json());

const users = ['Gustavo', 'Matheus'];

function checkUserInArray(req, res, next){
  if(!users[req.params.index]){
    return res.status(400).json({error: "User does not exist"});
  }

  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index',checkUserInArray, (req, res) => {
  const {index} = req.params;
  return res.json(users[index]);
})

server.post('/users/', (req, res) => {
  const {nome} = req.body;

  users.push(nome);
  
  return res.json(users);
})

server.put('/users/:index',checkUserInArray, (req,res)=>{
  const { index } = req.params;
  const { nome } = req.body;

  users[index] = nome;

  return res.json(users);
})

server.delete('/users/:index', checkUserInArray, (req,res)=>{
  const { index } = req.params;

  users.splice(index,1);

  return res.json(users);
})



server.listen(3000);

