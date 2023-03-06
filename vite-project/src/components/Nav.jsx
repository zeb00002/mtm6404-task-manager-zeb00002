import React from 'react'

const Nav = (props) => {
  return (
    <nav>
       
      <ul>
      {props.children} 
      </ul> 
    </nav>
  )
}

export default Nav