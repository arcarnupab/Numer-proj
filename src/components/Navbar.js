import React from 'react'
import { Nav,
    NavLink,
    Bars,
    NavMenu, 
} from './NavbarElements';
 
const  Navbar = () => {
  return (
    <>
    <Nav>
        <Bars/>
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Bisection' activeStyle>
            Bisection
          </NavLink>
          <NavLink to='/FalsePosition' activeStyle>
            FalsePosition
          </NavLink>
        </NavMenu>
    </Nav>
    </>
  )
}

export default Navbar