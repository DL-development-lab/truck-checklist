const db = require('../models');
const User = db.User;

exports.index = async (req, res) => {
  try {
    const dados = await User.findAll();
    res.render('index', { title: 'Seu App Node.js', dados });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro interno do servidor');
  }
};
