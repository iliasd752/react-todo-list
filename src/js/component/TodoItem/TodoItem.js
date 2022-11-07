import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  return (
  <div className='todo-row'>
    {props.todo.text}
  </div>
)};

TodoItem.propTypes = {};

TodoItem.defaultProps = {};

export default TodoItem;
