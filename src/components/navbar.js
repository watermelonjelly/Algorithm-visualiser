import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import brand from '../assets/img/cilogo.png';


function nav(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container fluid>
                <Navbar.Brand href="#home" className="bg-info text-white text-center font-weight-bold">
                <img
                    alt=""
                    src={brand}
                    width="115"
                    height="50"
                    className="d-inline-block align-center"
                    />{' '}
                MentorMe
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#cardTank">Activities</Nav.Link>
                        <NavDropdown title="Visualising Algorithm" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#algo">Sorting</NavDropdown.Item>
                        <NavDropdown.Item href="#algo">Bubble Sort</NavDropdown.Item>
                        <NavDropdown.Item href="#algo"></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default nav;