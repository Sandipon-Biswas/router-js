import React from 'react'
import { NavLink } from 'react-router-dom';
import {Container,Nav,Navbar} from 'react-bootstrap';
import styles from './Navberr.module.css'
import Logo from '../Logo/Logo';


const Navberr = () => {
    return (
        <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Logo/>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="" />
            <Navbar.Collapse id="">
            <Nav className="me-auto">
                <NavLink to="/" className={({isActive})=> isActive ? styles.activeStyle : styles.inactive   } > Home</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? styles.activeStyle : styles.inactive   } > About</NavLink>
                <NavLink to="/contact" className={({isActive})=> isActive ? styles.activeStyle : styles.inactive   } > Contact</NavLink>
                <NavLink to="/blog" className={({isActive})=> isActive ? styles.activeStyle : styles.inactive   } > blog</NavLink>
               
               
                
                
            </Nav>
            <Nav>
            <NavLink to="/login" className=" btn-sm btn btn-primary mx-1 rounded-pill px-3 " > Login</NavLink>
            <NavLink to="/subscribe" className=" btn-sm btn  btn-danger rounded-pill px-3 " > Subscribe</NavLink>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}

export default Navberr
