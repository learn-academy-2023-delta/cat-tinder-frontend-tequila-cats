import React from 'react'
import {Nav, NavItem} from 'reactstrap'
import catNew from '../pages/CatNew'
import {NavLink} from 'react-router-dom'


const Header = () => {
  return (
    <>
    <div className='header'>
      <Nav>
        <NavItem>
          <NavLink style = {{color: 'black', fontWeight: 'bold', textDecoration: 'none', paddingRight: '20px', fontSize: '40px', fontFamily: 'Caveat, cursive'}} to='/catindex'>
            View The Cats
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink  style = {{color: 'black', fontWeight: 'bold', textDecoration: 'none',  fontSize: '40px', fontFamily: 'Caveat, cursive'}} to='/catnew'>
            Add Your Cat
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    </>
  )
}

export default Header