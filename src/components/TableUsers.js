import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function TableUsers(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button as={Link} to={"/editar-usuario/"+user.id} style={{marginRight: '15px'}} >Editar</Button>
                <Button onClick={() => props.deleteuser(user.id)} >Deletar</Button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}
