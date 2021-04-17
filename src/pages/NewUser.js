import React from 'react';
import useForm from '../hooks/useForm';
import {Form, Button} from 'react-bootstrap';

import {postUser} from '../services/api';

export default function NewUser() {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  async function novoUsuario() {
    try {
      const response = await postUser(values);
      alert(response.data.message);
      window.location.href = "/";
    } catch(err) {
      if (err) {
        alert(err.response.data.message)
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(novoUsuario)}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Nome</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Digite o nome"
          name="name"
          onChange={handleChange} 
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Digite o email"
          name="email"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {loading ? 'Cadastrando...' : 'Cadastrar'}
      </Button>
    </Form>
  );
}