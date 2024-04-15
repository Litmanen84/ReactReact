import React, { useState, useEffect } from 'react';
import './index.css';
import InputField from './Components/Input';
import SubmitButton from './Components/Button';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = () => {
    if (todoInput.trim() !== '') {
      const newTodo = { text: todoInput };
      setTodos([...todos, newTodo]);
      setTodoInput('');
      localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    }
  };

  return (
    <>
      <div className="title">
        <h1>My Reaction to REACT</h1>
      </div>
      <div className="inputSection">
        <InputField value={todoInput} onChange={handleInputChange} placeholder="Add a newTodo" />
        <SubmitButton onClickHandler={handleSubmit} buttonText="Click to add" />
      </div>
      <div className="todos">
        <TodoList title="Task List" todos={todos} />
      </div>
    </>
  );
}

export default App;
