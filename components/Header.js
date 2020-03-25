import { useState } from 'react';
import {APP_NAME} from '../config';
import Link from 'next/link';
import Router from 'next/router'
import {signout, isAuth} from '../actions/auth'
import Search from '../components/blog/Search'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header =(props)=> {
    const [isOpen, setIsOpen] = useState(false);
     const toggle = () => setIsOpen(!isOpen);
    return (
        <>
          <Navbar color="dark" light expand="md">
            <Link href="/">
              <NavbarBrand >{APP_NAME}</NavbarBrand>
            </Link>
            <NavbarToggler onClick={toggle} />
            <Collapse  isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar >
              <>
                    <NavItem>
                  <Link href='/blogs'>
                  <NavLink style={{cursor: 'pointer' , color: 'white'}}>Blogs</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/contact'>
                  <NavLink style={{cursor: 'pointer' , color: 'white'}}>Contact us</NavLink>
                  </Link>
                </NavItem>
              </>
                {!isAuth() && (
                  <>
                    <NavItem>
                  <Link href='/signup'>
                  <NavLink style={{cursor: 'pointer' , color: 'white'}}>Sign up</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href='/signin'>
                  <NavLink style={{cursor: 'pointer' , color:'white'}}>Sign in</NavLink>
                  </Link>
                </NavItem>
                  </>
                )}
              {isAuth() && (
                <NavItem>
                <NavLink style={{cursor: 'pointer'}}onClick={()=>signout(()=>Router.replace(`/signin`))}>Sign Out</NavLink>
              </NavItem>
              )}

              {isAuth() && isAuth().role === 0 && (
                <NavItem>
                  <Link href ="/user">
                    <NavLink style={{cursor: 'pointer'}} >
                      {`${isAuth().name}'s Dashboard`}
                    </NavLink>
                  </Link>
              </NavItem>
              )}

            {isAuth() && isAuth().role === 1 && (
                <NavItem>
                  <Link href ="/admin">
                    <NavLink style={{cursor: 'pointer'}} >
                      {`${isAuth().name}'s Dashboard`}
                    </NavLink>
                  </Link>
              </NavItem>
              )}

              </Nav>
            </Collapse>
          </Navbar>
          <Search />
        </>
      );
};


export default Header;