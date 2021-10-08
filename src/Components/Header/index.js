import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink ,Link } from 'react-router-dom'
import { signout } from '../../action/auth.actions';
/**
* @author
* @function Header
**/

const Header = (props) => {

    const auth=useSelector(state =>state.auth)
    const dispatch=useDispatch();

    const logout=()=>{
        dispatch(signout());
    }
    const renderLoggedup=()=>{
        return(
            <Nav>
            <li className="nav-item"> 
           <button className="nav-link btn btn-outline-danger btn-sm" onClick={logout} style={{}}>Logout</button>  
             {/* <button onClick={handleShow}><IoIosAdd /> <span>Add</span></button> */}
            </li>
            
        </Nav>
        ) 
    };
    const renderLoggedLinks=()=>{
        return(
            <Nav>
            <li className="nav-item"> 
             <NavLink to="signin" className="nav-link">SignIn</NavLink>
            </li>
            <li className="nav-item"> 
             <NavLink to="signup" className="nav-link">SignUp</NavLink>
            </li>
        </Nav>
        )
    };
    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{zIndex:1}}>
            <Container fluid>
               <Link to="/" className="navbar-brand">Admin DashBored</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>

                    </Nav>
                  
                  
                    {auth.authenticate ? renderLoggedup() : renderLoggedLinks()  }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header