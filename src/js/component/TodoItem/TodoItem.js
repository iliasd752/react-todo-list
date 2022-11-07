import React, { useState } from 'react';
import PropTypes from 'prop-types';


const DeleteButton = () => <button>Delete</button>

const TodoItem = (props) => {

  const [hover, setHover] = useState(false)

  
  


  return (
  <div className='todo-row' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    {props.todo.text}
    {hover && <DeleteButton />}
  </div>
)};

TodoItem.propTypes = {};

TodoItem.defaultProps = {};

export default TodoItem;
