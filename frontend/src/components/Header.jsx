import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';

const Header = () => {
  return (
   <header>
    <Navbar bg="dark" variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">MY Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cart"><FaShoppingCart/>Cart</Nav.Link>
            <Nav.Link href="/login"><FaUser/>Sign IN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </header>
  )
}

export default Header