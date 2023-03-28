

//  ------------------------------------------------------------ 5:57 --------------------

import React, { useState, useEffect } from 'react';
import {AiFillPlusSquare} from 'react-icons/ai'
import {TiTick} from 'react-icons/ti'
import {BsCircle} from 'react-icons/bs'
import {BsFillTrash3Fill} from 'react-icons/bs'
import './app.css'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [filterOption, setFilterOption] = useState('all');
  const isLoggedIn = true;

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (todoInput.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoInput,
          completed: false,
        },
      ]);
      setTodoInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const filterTodo = (e) => {
    setFilterOption(e.target.value);
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      const localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos);
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterOption === 'completed') {
      return todo.completed;
    } else if (filterOption === 'uncompleted') {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div className='container__main'>
      <div>
        <Nav />
        
      </div>
      <Header />
      <form>
        
        <input
          type="text"
          className="todo-input"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button className="todo-button" type="submit" onClick={addTodo}>
          {/* <i className="fas fa-plus-square"></i> */} < AiFillPlusSquare />
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onChange={filterTodo}
            value={filterOption}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li className={todo.completed ? 'todo completed' : 'todo'} key={todo.id}>
              <div className="todo-item">{todo.title}</div>
              <button className="complete-btn" onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? (
                  < TiTick/>
                ) : (
                  <BsCircle />
                )}
              </button>
              <button className="trash-btn" onClick={() => deleteTodo(todo.id)}>
                < BsFillTrash3Fill />
              </button>
            </li>
          ))}
        </ul>
      </div>
      < Footer isLoggedIn ={isLoggedIn} />
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
