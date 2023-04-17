

import React, { createContext, useState } from 'react';


export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [filterOption, setFilterOption] = useState('all');
  const [priority, setPriority] = useState('low');

  // Add todo
//   const todoRef = db.collection('todos').doc();
//   todoRef.set({
//   id: todoRef.id,
//   title: todoInput,
//   completed: false,
//   priority: priority,
// });

  const addTodo = (title) => {
    if (title.trim() !== '') {
      const newTodo = {
        id: Math.random(),
        title: title,
        check: priority,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodoInput('');
    }
  };

  // Delete todo
  const deleteTodo = (id) => {
    db.collection('todos').doc(todoId).delete();

    // setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  };

  // Filter todos
  const filterTodo = (e) => {
    setFilterOption(e.target.value);
  };

  // Filtered todos based on filter option
  const filteredTodos = todos.filter(todo => {
    if (filterOption === 'completed') {
      return todo.completed;
    } else if (filterOption === 'uncompleted') {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <TodoContext.Provider
      value={{
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
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
