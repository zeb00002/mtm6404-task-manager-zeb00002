import React, { useContext } from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import { BsCircle } from 'react-icons/bs';
import { BsFillTrash3Fill } from 'react-icons/bs';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Todolist.css';
import Header from '../Header/Header';
import { TodoContext } from './TodoContext';

const List = () => {
  const todoContext = useContext(TodoContext); // Use the useContext hook to access the context values
  // const { todos, deleteTodo, toggleTodo, filteredTodos } = todoContext;


  const {
    todos,
    todoInput,
    filterOption,
    priority,
    addTodo,
    deleteTodo,
    toggleTodo,
    filterTodo,
    setTodoInput,
    setPriority,
    filteredTodos,
  } = todoContext;

  const isLoggedIn = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoInput);
  };

  return (
    <div className='container__main'>
      <Nav />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button className="todo-button" type="submit">
          <AiFillPlusSquare />
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onChange={(e) => filterTodo(e)}
            value={filterOption}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>

        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">high</option>
          </select>
        </div>
      </form>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <li className={todo.completed ? 'todo completed' : 'todo'} key={todo.id}>
              <div className="todo-item">{todo.title}</div>
              <div className="todo-item">{todo.check}</div>

              <button className="complete-btn" onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? (
                  <TiTick />
                ) : (
                  <BsCircle />
                )}
              </button>
              <button className="trash-btn" onClick={() =>
                deleteTodo(todo.id)}>
                <BsFillTrash3Fill />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default List;
