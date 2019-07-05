const express = require('express');
const app = express();
const { pessoas } = require('./app/models');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  //res.header('Access-Control-Allow-Credentials', true)
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});


//lista pessoas utilizando Promise
/*app.get('/lista', function(req, res){
  console.log('Lista todas as pessoas');
  pessoas.findAll().then(pessoas => {
    if(!pessoas){
      return res.json({});
    }
      res.json(pessoas);
  });
});*/
//listar pessoas utilizando async await
app.get('/lista', async (req, res, next) => {
  try {
    const pessoa = await pessoas.findAll()
    res.json(pessoa);
  } catch (e) {
    next(e) 
  }
})
// Buscar pessoa utilizando promise
/*app.get('/encontrar/:id', function(req, res){
  console.log('Pessoa');
  pessoas.findByPk(req.params.id).then(pessoas => {
      console.log(pessoas);
      if(!pessoas){
        return res.json({});
      }
      res.json(pessoas);
  });
});*/
//Buscar pessoa utilizando async await
app.get('/encontrar/:id', async (req, res, next) => {
  try {
    const pessoa = await pessoas.findByPk(req.params.id)
    res.json(pessoa);
  } catch (e) {
    next(e) 
  }
})

//deletar pessoa utilizando promise
/*app.delete('/delete/:id', function(req, res){
  pessoas.destroy({
      where: { id: req.params.id } 
  }).then(result => {
      res.status(200).json(result);
  });
});*/
//deletar pessoa utilizando async await
app.get('/delete/:id', async (req, res, next) => {
  try {
    const pessoa = await pessoas.destroy({
      where: { id: req.params.id } 
  })
    res.json(pessoa);
  } catch (e) {
    next(e) 
  }
})
//cadastrar pessoa utilizando promise
/*app.post('/cadastro', function(req, res){
  console.log('chegou no server');
  pessoas.create(req.body).then(pessoas => {
      console.log(pessoas.get({
        plain: true
      }));
      res.send(pessoas);
  });
}); */
//cadastrar pessoa utilizando async await
app.get('/cadastro', async (req, res, next) => {
  try {
    const pessoa = await pessoas.create(req.body)
    res.json(pessoa);
  } catch (e) {
    next(e) 
  }
})
//atualizar pessoa utilizando promise
/*app.put('/update/:id', function(req, res){
  pessoas.update(req.body,{ 
      where: { id: req.params.id } 
  }).then(result => {
      res.status(200).json(result);
  });
});*/
//atualizar pessoa utilizando async await
app.get('/update/:id', async (req, res, next) => {
  try {
    const pessoa = await pessoas.update(req.body,{ 
      where: { id: req.params.id } 
  })
    res.json(pessoa);
  } catch (e) {
    next(e) 
  }
})

app.listen(3000);

