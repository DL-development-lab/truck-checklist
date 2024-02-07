const express = require('express');
const app = express();
const port = 3306;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const seuController = require('./controllers/example');
app.get('/', seuController.index);

const db = require('./models');
db.sequelize.sync()
  .then(() => {
    console.log('Database created');
  })
  .catch((error) => {
    console.error('Error synching the DB:', error);
  });

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
