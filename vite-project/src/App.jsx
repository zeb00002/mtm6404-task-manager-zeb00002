

//  ------------------------------------------------------------ 5:57 --------------------

import React, { useState, useEffect } from 'react';
import {AiFillPlusSquare} from 'react-icons/ai'
import {TiTick} from 'react-icons/ti'
import {BsCircle} from 'react-icons/bs'
import {BsFillTrash3Fill} from 'react-icons/bs'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {Routes,Route} from 'react-router-dom';
import List from './components/ToDOList/List';
import { TodoProvider } from './components/ToDOList/TodoContext';
function App() {
  

  return (
    <div className='container__main'>
      
      <Routes>
       <Route  path='/' element={<Header/>} />
       <Route path="/" element={<Header />} />
          <Route
            path="/todolist"
            element={
              // Wrap the component that needs to access the TodoContext with TodoProvider
              <TodoProvider>
                <List />
              </TodoProvider>
            }
          />


     </Routes>
        
      </div>
     
  );
}

export default App;

// 5:57pm  ----------------------------------------------------------------------- 

// import React, { useState } from 'react';
// import Nav from './components/Nav/Nav';
// import Footer from './components/Footer/Footer';

// function App() {
//   const isLoggedIn = true;


//   return (
//     <div className="container">
//       <Nav>
//         <li><h2>Capstone To Do</h2></li>
//         <li>Services</li>
//         <li>About</li>
//         <li>Contact</li>
//         <li>Hire Me</li>
//       </Nav>
//       <div className="footer">
//       <Footer isLoggedIn={isLoggedIn} />

//       </div>
//     </div>
//   );
// }

// export default App;
