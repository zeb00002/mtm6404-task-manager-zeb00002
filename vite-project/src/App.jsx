import React from 'react';
import services from "./services"
import Header from './components/Header'
import Nav from './components/Nav'
import Footer  from './components/Footer';

function App() {
  const isLoggedIn = true;
  const works = services.map(item => {
    return(

      <Header
      item = {item} 
      />
    )
  })

  return (
    <div className= "container">
    <Nav>
      <li><h2>Capstone</h2></li>
      <li>Services</li>
      <li>About</li>
      <li>Contact</li>
      <li>Hire Me</li> 
    </Nav>
    <h3>Services</h3>
    <section className = "ser-cont">
    
    {works}
    </section>
    <Footer isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default App
