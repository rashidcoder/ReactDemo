import React from 'react'
import MinMatkasse from '../../../assets/imgs/1.PNG'
import Laga from '../../../assets/imgs/2.PNG'
import LoggaIn from '../../../assets/imgs/3.PNG'
import './navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from 'react-bootstrap';

const NavBarMobile = () => {
    return (

        <Navbar className="d-flex p-0 navbar-mobile" style={{ justifyContent: "left" }} collapseOnSelect expand="lg" bg="light" expand="lg">
            <Navbar.Toggle className="ml-2 mb-1 text-dark" style={{ border: "unset" }} aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="#home">
                <ul style={{ fontSize: "15px" }} className="display-flex mb-0 ">
                    <li className="text-dark"> Min meny  </li>
                    <li className="text-light">&#8594; </li>
                    <li className="text-light">   Mina varor  </li>
                </ul>
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link className="text-dark" href="# "  >x</Nav.Link>
                <Nav className="mr-auto" style={{marginTop: "163px"}}>
                    <Nav.Link href="#features">Hem</Nav.Link>
                    <Nav.Link href="#pricing">Min Matkasse</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Laga</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Laga in
      </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}
export default NavBarMobile

