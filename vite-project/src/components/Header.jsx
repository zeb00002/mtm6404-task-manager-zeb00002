import React from 'react'

const Header = (props) => {
  return (
    <div className='services'>
     <div className='service'>
        <h4>{props.item.title}</h4>
        <p>{props.item.price}</p>
     </div>   
    </div>
  )
}

export default Header