import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
    <div className='background'>   
    <ul>
    <li> <NavLink to='/'>Header</NavLink></li>
    <li>  <NavLink to='/todolist'>List</NavLink></li>    
    </ul>
    </div>

    </nav>
  )
}

export default Nav