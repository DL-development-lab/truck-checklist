const { User } = require('../models');

exports.signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Password and confirmed password are not equal' });
    }

    const user = await User.create({ name, email, password });

    return res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
