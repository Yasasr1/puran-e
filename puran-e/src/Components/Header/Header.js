import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import {Modal, ButtonToolbar, Form} from 'react-bootstrap';

const Header = (props) => {
    return (
        <div>
            <Navbar 
            style={{position: 'absolute',  
            width: '100%',
            boxShadow: '5px 5px 15px -1px rgba(0,0,0,0.41)',
            backgroundColor: 'rgba(153, 255, 0, 0.2)',
            
            }} variant="dark">
                <Navbar.Brand>Puran-E</Navbar.Brand> 
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                </Nav>
                <Button variant="warning">Login</Button>
                <Register/>
            </Navbar>
        </div>
    );

    function RegisterForm(props) {
        return (
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        
                            <Form.Row>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <Form.Label>Password Again</Form.Label>
                                    <Form.Control type="password"/>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={props.onHide}>Sign up</Button>
                </Modal.Footer>
            </Modal>
        );
    }
      
    function Register() {const [modalShow, setModalShow] = React.useState(false);
        return (
            <ButtonToolbar>
                <Button variant="warning" onClick={() => setModalShow(true)}>Sign Up</Button>
                <RegisterForm show={modalShow} onHide={() => setModalShow(false)}/>
            </ButtonToolbar>
        );
    }
};

export default Header;