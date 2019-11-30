import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const Header = (props) => {
    return (
        <div>
            <Navbar style={{position: 'absolute',  
            width: '100%',
            borderBottom: '1px solid #000000',
            boxShadow: '5px 5px 15px -1px rgba(0,0,0,0.41)'
            }} bg="transparent" variant="dark">
                <Navbar.Brand>Puran-E</Navbar.Brand> 
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;