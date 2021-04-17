import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Container} from 'react-bootstrap';

import Header from './components/header';

import Users from './pages/Users';
import NewUser from './pages/NewUser';
import EditUser from './pages/EditUser';

export default function Routes() {
  return (
      <BrowserRouter>
          <Header/>
          <Container style={{padding: '50px 75px 0'}}>
            <Switch>
              <Route exact path="/" component={Users} />
              <Route exact path="/cadastrar-usuario" component={NewUser}/>
              <Route exact path="/editar-usuario/:id" component={EditUser} />  
            </Switch>
          </Container>
      </BrowserRouter>
  );
}