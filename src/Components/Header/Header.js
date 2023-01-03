import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
                  <Nav.Link>
                    <NavLink
                      to="/"
                      style={({ isActive }) => ({
                        color: isActive ? "Black" : "white",
                      })}
                    >
                     HOME
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/Reviews"
                      style={({ isActive }) => ({
                        color: isActive ? "Black" : "white",
                      })}
                    >
                      REVIEWS
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/Dashboard"
                      style={({ isActive }) => ({
                        color: isActive ? "Black" : "white",
                      })}
                    >
                      DASHBOARD
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/About"
                      style={({ isActive }) => ({
                        color: isActive ? "Black" : "white",
                      })}
                    >
                      BLOGS
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/About"
                      style={({ isActive }) => ({
                        color: isActive ? "Black" : "white",
                      })}
                    >
                      ABOUT
                    </NavLink>
                  </Nav.Link>
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;