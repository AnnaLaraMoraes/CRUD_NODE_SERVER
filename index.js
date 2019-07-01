const express = require('express');
const app = express();
const { pessoas } = require('./app/models');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//lista todas as pessoas
app.get('/lista', function(req, res){
  console.log('Lista todas as pessoas');
  pessoas.findAll().then(pessoas => {
      res.json(pessoas);
  });
});

// Pega pessoa especifica a partir do ID
app.get('/encontrar/:id', function(req, res){
  console.log('Pessoa');
  pessoas.findByPk(req.params.id).then(pessoas => {
      console.log(pessoas);
      if(!pessoas){
        return res.json({});
      }
      res.json(pessoas);
  });
});
//deleta pessoa a partir de seu ID (deveria ser app.delete)
app.delete('/delete/:id', function(req, res){
  pessoas.destroy({
      where: { id: req.params.id } 
  }).then(result => {
      res.status(200).json(result);
  });
});
//cadastrar pessoa
app.post('/cadastro', function(req, res){
  pessoas.create(req.body).then(pessoas => {
      console.log(pessoas.get({
        plain: true
      }));
      res.send(pessoas);
  });
}); 
//atualizar dados de uma pessoa a partir de seu id
app.put('/update/:id', function(req, res){
  pessoas.update(req.body,{ 
      where: { id: req.params.id } 
  }).then(result => {
      res.status(200).json(result);
  });
});

app.listen(3000);

