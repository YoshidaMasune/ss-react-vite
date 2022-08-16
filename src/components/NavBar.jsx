import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { ImArrowDown } from "react-icons/im";
function NavBar() {

   return (
      <Navbar bg="dark" variant="dark" expand="lg" >
         <div className="container-sm">
            <Navbar.Brand>suwan</Navbar.Brand>
            <Navbar.Toggle aria-controls="menu-list">
               <ImArrowDown />
            </Navbar.Toggle>
            <Navbar.Collapse>
               <Nav>
                  <Nav.Link>รายชื่อสมาชิก</Nav.Link>

                  <NavDropdown title="Admin">
                     <NavDropdown.Item href="">จดค่าไฟ</NavDropdown.Item>
                     <NavDropdown.Item href="">แก้ขรายชื่อ</NavDropdown.Item>
                     <NavDropdown.Item href="">เพิ่มสมาชิก</NavDropdown.Item>
                  </NavDropdown>                 
               </Nav>
            </Navbar.Collapse>
         </div>
      
      </Navbar>
   )
}

export default NavBar