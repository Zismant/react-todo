import React from "react";
import "./todo-list-item.css"

const TodoListItem = ({label, important = false}) => {

  const liStyle = {
    color: important ? 'tomato' : 'black',
  }
  return (
    <span
      className={'todo-list-item'}
      style={liStyle}>
          {label}
    </span>
  );
};

export default TodoListItem;