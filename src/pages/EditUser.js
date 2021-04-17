import React from 'react';
import useForm from '../hooks/useForm';
import {Form, Button} from 'react-bootstrap';

import {putUsers} from '../services/api';

export default function EditUser({ match }) {
  const userId = match.params.id;

  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  async function atualizarUsuario() {
    const data = await putUsers(userId, values);
    alert(data.message);
    window.location.href = "/";
  };

  return (
    <Form onSubmit={handleSubmit(atualizarUsuario)}>
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
        {loading ? 'Atualizando...' : 'Atualizar'}
      </Button>
    </Form>
  );
}