import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  '../../App.css';
import { Link } from 'react-router-dom';




const Navigation = () =>{

    return(
        <Navbar style={{ backgroundColor: '#2fa67b' }} expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#" id="Mbschool"> <Link to="/" style={{color: '#fff', textDecoration: 'none'}}>MBSCHOOL</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Categories" id="navbarScrollingDropdown" >
                <NavDropdown.Item href="#"> <Link to="/DevWeb" style={{color: 'black', textDecoration: 'none'}}>Developpement Web</Link> </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                <Link to="/Design" style={{color: 'black', textDecoration: 'none'}}>Design</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                <Link to="/DataAnalysis" style={{color: 'black', textDecoration: 'none'}}>Data Analysis</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                <Link to="/IA" style={{color: 'black', textDecoration: 'none'}}>Artificiel Intelligent</Link>
                </NavDropdown.Item>
        
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                <Link to="/Blockchain" style={{color: 'black', textDecoration: 'none'}}>Blockchain</Link>
                </NavDropdown.Item>
              </NavDropdown>


              <Nav.Link href="#action2" id="enseigner"><Link to="/InscriptionEnseignant" style={{color: '#fff', textDecoration: 'none'}}>  Enseigner sur Mbschool </Link></Nav.Link>
              
              
            </Nav>
            <Button className='me-2' variant="out-success" id="button1"> <Link to="/InscriptionEtudiant" style={{color: '#fff', textDecoration: 'none'}}>Inscription</Link> </Button>
            <Button className='me-4' variant="out-success" id="button1"> <Link to="/ConnexionEtudiant" style={{color: '#fff', textDecoration: 'none'}}>Connexion</Link></Button>
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