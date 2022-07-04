import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  '../../App.css'



const Navigation = () =>{

    return(
        <Navbar style={{ backgroundColor: '#2fa67b' }} expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#" id="Mbschool">MBSCHOOL</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Categories" id="navbarScrollingDropdown" >
                <NavDropdown.Item href="#action3">Developpement Web</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Design
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Data Analysis
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action6">
                  Artificial Intelligent
                </NavDropdown.Item>
        
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action8">
                  Blockchain
                </NavDropdown.Item>
              </NavDropdown>


              <Nav.Link href="#action2" id="enseigner">Enseigner sur Mbschool</Nav.Link>
              
              
            </Nav>
            <Button className='me-2' variant="out-success" id="button1">Inscription</Button>
            <Button className='me-4' variant="out-success" id="button1">Connexion</Button>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{width: '500px'}}
              />
              <Button variant="out-success" id="button1">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )

      

}

export default Navigation;