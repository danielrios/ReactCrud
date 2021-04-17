import axios from 'axios';

export async function postUser(users) {
  const {data} = await axios.post('http://127.0.0.1:5000/cadastrar',users);
  return {data};
}
  
export async function getUsers() {
    const {data} = await axios.get('http://127.0.0.1:5000/usuarios');
    return data.result;
}

export async function putUsers(id, users) {
  const {data} = await axios.put('http://127.0.0.1:5000/usuario/'+id, users);
  return data;
}

export async function deleteUser(id) {
    const {data} = await axios.delete('http://127.0.0.1:5000/usuario/'+id);
    return data;
}

