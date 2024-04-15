import React from 'react';
import TodoItem from './TodoItem'

const TodoList = ({ title, todos }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul className='ulist'>
        {todos.map((element, index) => (
          <TodoItem key={index} todo={element} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
