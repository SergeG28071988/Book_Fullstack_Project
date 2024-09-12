import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBarMenu() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Books</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                       <NavLink className="show-books-nav" to="/">Books</NavLink>
                       <NavLink className="add-book-nav" to="addBook">Add Book</NavLink>
                       <NavLink className="nav-book-detail" to="bookDetail">Book Detail</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBarMenu;




