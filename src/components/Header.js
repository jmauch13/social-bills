import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/dollar-sign-green-vector.webp';
import UserLoginForm from '../features/user/UserLoginForm';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar className='header' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
            <img src={logo} alt='logo' className='logo' />
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' id='link' to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' id='link' to='/signup'>
                            Sign Up
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' id='link' to='/about'>
                            How it Works
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' id='link' to='/forum'>
                            Forum
                        </NavLink>
                    </NavItem>
                </Nav>
                <UserLoginForm />
            </Collapse>
        </Navbar>
    );
};

export default Header;