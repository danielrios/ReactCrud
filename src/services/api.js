import axios from 'axios';

export async function postUser(users) {
  const {data} = await axios.post('https://crud-flask-api.herokuapp.com/cadastrar',users);
  return {data};
}
  
export async function getUsers() {
    const {data} = await axios.get('https://crud-flask-api.herokuapp.com/usuarios');
    return data.result;
}

export async function getUser(id) {
  const {data} = await axios.get('https://crud-flask-api.herokuapp.com/usuario/'+id);
  return data.result;
}

export async function putUsers(id, users) {
  const {data} = await axios.put('https://crud-flask-api.herokuapp.com/usuario/'+id, users);
  return data;
}

export async function deleteUser(id) {
    const {data} = await axios.delete('https://crud-flask-api.herokuapp.com/usuario/'+id);
    return data;
}

