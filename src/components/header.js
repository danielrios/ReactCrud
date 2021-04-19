import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <header>
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand as={NavLink} to="/">Users Crud</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">Usuarios</Nav.Link>
          <Nav.Link as={NavLink} to="/cadastrar-usuario">Novo Usuario</Nav.Link>
        </Nav>
      </Navbar>
  </header>
    
           

            

  )
}