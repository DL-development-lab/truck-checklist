const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const seuController = require('./controllers/example');
app.get('/', seuController.index);

const db = require('./models');
db.sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
