import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ImArrowDown } from "react-icons/im";

function NavBar() {

   return (
      <Navbar bg="dark" variant="dark" expand="lg" >
         <div className="container-sm">
            <Navbar.Brand as={Link} to="/">suwan</Navbar.Brand>
            <Navbar.Toggle aria-controls="menu-list">
               <ImArrowDown />
            </Navbar.Toggle>
            <Navbar.Collapse id='menu-list'>
               <Nav className='ms-auto'>
                  <Nav.Link as={Link} to="/">รายชื่อสมาชิก</Nav.Link>
                  <Nav.Link as={Link} to="/login">login</Nav.Link>
                  <Nav.Link as={Link} to="/addmin">addmin</Nav.Link>
                  <NavDropdown title="">
                     <NavDropdown.Item as={Link} to='/addmin/update' >จดค่าไฟ</NavDropdown.Item>
                     <NavDropdown.Item as={Link} to='/addmin/create'>เพิ่มสมาชิก</NavDropdown.Item>
                  </NavDropdown>                 
               </Nav>
            </Navbar.Collapse>
         </div>
      
      </Navbar>
   )
}

export default NavBar