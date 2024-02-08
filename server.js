const express = require('express');
const mainRoutes = require('./server/routes/mainRoutes');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', mainRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
