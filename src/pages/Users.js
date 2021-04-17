import React, { useState, useEffect } from 'react';
import TableUsers from '../components/TableUsers';

import {getUsers, deleteUser} from '../services/api';


export default function Users() {
  const [users, setUsers] = useState([]);

  async function delete_user(id) {
    if (window.confirm("Deletar o usuário?")) {
      const data = await deleteUser(id);
      alert(data.message);
      window.location.reload();
    }
  }

  useEffect(() => {
    async function get() {
      setUsers(await getUsers());
    }
    get();
  }, []); //eslint-disable-line

  return (
    <TableUsers users={users} deleteuser={delete_user} />
  );
}