
import React from "react";
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import { useDispatch, useSelector } from "react-redux";
// import { closeModal, openModal } from "../redux/users/action";
// import Login from "../Component/Login";

export default function Navbars(){

  // const dispatch = useDispatch();
  // const { modalIsOpen, modalType } = useSelector((state) => state?.users);

  // const handleOpenModal = (type) => {
  //   dispatch(openModal(type));
  // };
  // const handleCloseModal = () => {
  //   dispatch(closeModal());
  // };

  // const renderModalContent = () => {
  //   console.log("Modal_Type", modalType);
  //   switch (modalType) {
  //     case "login":
  //       return <Login />;
  //     default:
  //       return null;
  //   }
  // };
  return (
   <Root>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-menu">
     <Container>
       <Navbar.Brand href="#home">OMETV</Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link href="subscription">Subscription</Nav.Link>
           <Nav.Link href="profile">Profile</Nav.Link>
           {/* <Nav.Link href="#pricing">Customer Support</Nav.Link> */}
           {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
             <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">
               Another action
             </NavDropdown.Item>
             <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item href="#action/3.4">
               Separated link
             </NavDropdown.Item>
           </NavDropdown> */}
         </Nav>
         <Nav>
           <Nav.Link href="login">Login</Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
   {/* {modalIsOpen && <div className="open_page">{renderModalContent("login")}</div>} */}
   </Root>
  )
}
const Root = styled.section`
.nav-menu {
   background:#eaf9f5 !important;
   /* .open_page {
       z-index: 1000;
       position: fixed;
       top: 64px;
       left: 1px;
       width: 100%;
       backdrop-filter: blur(5px);
     } */
}
`;