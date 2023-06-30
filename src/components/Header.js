import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'
const Header = () => {
  return (
    <>
    <div className='header'>
      <Nav fill pills>
        <NavItem>
          <NavLink active href="#" className='nav-header'>
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
    </div>
    </>
  )
}

export default Header