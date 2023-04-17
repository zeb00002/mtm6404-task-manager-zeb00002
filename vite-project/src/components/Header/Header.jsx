import React from 'react'
import './header.css'
import Nav from '../Nav/Nav'
const Header = () => {
 

  return (
    <>
          <Nav/>

    <header className='header'>
        <h3>Welcome to my Todo App</h3>
        <p>Write down a task in the input below </p>
    </header>
    </>
  )
}

export default Header