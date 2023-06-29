import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
const Header = () => {
  return (
    <>
      <Nav fill pills>
        <NavItem>
          <NavLink active href="#">
            Cat
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            Add New Cat
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">
            Sponsor a cat 
          </NavLink>
        </NavItem>
      </Nav>
    </>
  )
}

export default Header