import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <ul className='listItem'>
      <input type="checkbox" className='inputCheck'/>
      <span className='todoName'>{todo.text}</span>
    </ul>
  );
};

export default TodoItem;
