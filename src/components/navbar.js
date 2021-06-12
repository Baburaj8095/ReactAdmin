
import React, { Component } from "react";
import { Navbar, Brand, Container, Nav, Dropdown, Button, CardGroup, Card, Form, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import logo_hyundai from '../img/MOBIS_LOGO.png';
import logo_hyundai1 from '../img/Icon ionic-md-arrow-dropdown.svg'
import vertical_dashboard from '../components/vertical_dashboard'

import './navbar.css';


function Header() {
   
  return (
<>
    <Navbar bg="light1">
    <Navbar.Brand href="#home"><img src={logo_hyundai} />
    </Navbar.Brand>
    <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
     <a href="#login" style={{marginRight:'20px',color:'#707070',fontFamily: "Hyundai Sans Head Office"}}>Logout</a>
     <a href="#"></a>
     <img src={logo_hyundai1} />
    </Navbar.Text>
  </Navbar.Collapse>
  </Navbar>

  <Nav
   style={{borderBottom :'1px solid #B2B2B2',     margin: '10px'}}
   defaultActiveKey="/"
>
  <Nav.Item>
    <Nav.Link href="/" style={{fontFamily: "Hyundai Sans Head Office"}}>Vertical Dashboard</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="vertical_dashboard"  style={{fontFamily: "Hyundai Sans Head Office"}}>Horizontal Dashboard</Nav.Link>
  </Nav.Item>
 
  <Nav.Item className="justify-content-end" style={{    flex: '1'}}>
    <Nav.Link eventKey="disabled" style={{    textAlign: 'right',color:'#0A0A0A',fontFamily: "Hyundai Sans Head Office"}}>
      Dowload Report
    </Nav.Link>
  </Nav.Item>

</Nav>



 
</>
  
  );
}

export default Header;


