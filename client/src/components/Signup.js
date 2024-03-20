import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Container } from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      await axios.post('/api/signup', formData);
      alert('Conta criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar conta:', error);
      alert('Erro ao criar conta. Por favor, tente novamente.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center">Criar Conta</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          name="name"
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />
        <TextField
          label="Senha"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />
        <TextField
          label="Confirmar Senha"
          name="confirmPassword"
          type="password"
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Criar Conta
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
