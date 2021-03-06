import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { IoMdHome,IoMdAdd} from "react-icons/io";
/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary
    " variant="dark">
      <Container>
      <Link to="/Run_profiles" className="navbar-brand">
        <IoMdHome/>   
        </Link>
      <Link class="text-left"  className="navbar-brand" >
      ORION
        </Link>
          
         
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mr-auto"></Nav>
          <Nav>
              <NavLink to="/Run_profiles"className="nav-link">
          Run
          </NavLink>  
            
            
             <NavLink to="/Switch_Profiles"className="nav-link">
          Switch Profiles
          </NavLink> <li className="nav-item">
               <NavLink to="/Global_Traffic_profiles"className="nav-link">
          Traffic Profiles
          </NavLink> 
           </li>
             

            <NavLink to="/synthetic" className="nav-link">
              Counter Profiles
            </NavLink>
            <NavLink to="/Analyze"className="nav-link">
          Analyze
          </NavLink> 
            {/* <NavLink to="/trial"className="nav-link">
          trial
          </NavLink> */}
            {/* <NavLink to="/Run_profiles"className="nav-link">
          Run
          </NavLink> */}
        
           </Nav>
        </Navbar.Collapse> 
      </Container>
    </Navbar>
  );
};

export default Header;
