import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
const Header = () => {
  return (
    <>
    <Nav
    fill
    pills
    >
    <NavItem>
      <NavLink
        active
        href="#"
        >
        Link
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">
       Link
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        disabled
        href="#"
        >
        Link
      </NavLink>
    </NavItem>
  </Nav>
    </>
  )
}

export default Header