import React from 'react';
import { Button, Container, Nav, Navbar, FormControl, Form, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavbarHeader() {
    return (
        <Container fluid>
            <div >
                <Row >
                    <Col lg={12} style={{ background: "#007BFF" }}>
                        <Navbar bg="primary" expand="lg" >
                            <Navbar.Brand as={Link} to="/">Bootcamp React</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav style={{ color: "white !important" }} className="mr-auto  " >
                                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                                    <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                </Nav>
                                <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="light">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>

                </Row>
            </div>
        </Container>
    );
}