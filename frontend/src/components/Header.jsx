import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/images.png'


const Header=()=> {
  return (
    <Navbar style={{ backgroundColor: 'rgb(125, 84, 142)' }} expand="lg">
      <Navbar.Brand>
        <Image src={logo} style={{ backgroundColor: 'none' }} width="40" height="30" />
        <span className="ml-2">Microsoft</span>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
   
        <Form inline className="ml-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar.Collapse>
      <Nav className="ml-auto">
        <Image
          src="/path-to-your-profile-image.png"
          alt="Profile"
          width="30"
          height="30"
          roundedCircle
        />
      </Nav>
    </Navbar>
  );
}

export default Header;
