import React from 'react'
import '../App.css';
import { Link } from 'react-router';
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function BottomNavBar() {

    return (
        <Navbar bg="dark" data-bs-theme="dark"  fixed="bottom" className='BottomNavBar'>
            <Nav className='NavBar'>
                <Nav.Link as={Link} to={"/sets"}>Sets</Nav.Link>
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/practice"}>Practice</Nav.Link>
            </Nav>
        </Navbar>
    )
}
