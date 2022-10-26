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
          <NavLink to='/RootOfEquations/Bisection' activeStyle>
            Bisection
          </NavLink>
          <NavLink to='/RootOfEquations/FalsePosition' activeStyle>
            FalsePosition
          </NavLink>
        </NavMenu>
    </Nav>
    </>
  )
}

export default Navbar