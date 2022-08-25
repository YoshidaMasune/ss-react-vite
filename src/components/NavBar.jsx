import React from 'react'
import { Navbar, Nav, NavDropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ImArrowDown } from "react-icons/im";

function NavBar() {
  

   return (
      <Navbar bg="dark" variant="dark" expand="md" >
         <div className="container">
            <Navbar.Brand as={Link} to="/">suwan</Navbar.Brand>
               <Nav className='ms-auto d-flex flex-row gap-3'>
                  <Nav.Item>
                     <Nav.Link as={Link} to="/login">login</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link as={Link} to="/admin">addmin</Nav.Link>  
                  </Nav.Item>    
               </Nav>
         </div>
      </Navbar>
   )
}

export default NavBar