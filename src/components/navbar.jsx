import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './navbar.css';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoMdCart } from 'react-icons/io';
// import logo from './images/logo.png';

function Navsec() {
  const expand = 'xl';

  return (
    <Navbar expand={expand} className="bg-white py-0">
      <Container>
        <Navbar.Brand href="#" className="logoBrand">
          <div className="logo"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-between flex-grow-1 pe-3">
              {/* Use Link instead of anchor tags for client-side navigation */}
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              {/* <Link to="/allproducts" className="nav-link ">
                Products
              </Link> */}


              <NavDropdown title="Products From" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  <Link to="/allproducts" className="nav-link ">
                    All States
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <Link to="/allproducts" className="nav-link ">
                    Karnataka
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  <Link to="/allproducts" className="nav-link ">
                    Tamilnadu



                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5">
                  <Link to="/allproducts" className="nav-link ">
                    Kerala
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5">
                  <Link to="/allproducts" className="nav-link ">
                    Telugana
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5">
                  <Link to="/allproducts" className="nav-link ">
                    Andra
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5">
                  <Link to="/allproducts" className="nav-link ">
                    Maharastra
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5">
                  <Link to="/allproducts" className="nav-link ">
                    Delhi
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action5">
                  <Link to="/allproducts" className="nav-link ">
                    Kolkata
                  </Link>
                </NavDropdown.Item>

              </NavDropdown>

              <Link to="/cart" className="nav-link cartSec">
                <IoMdCart className="cartlogo" />
                <span className="totProd">2</span>
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navsec;
