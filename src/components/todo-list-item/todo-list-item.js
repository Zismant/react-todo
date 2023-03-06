import React from "react";
import "./todo-list-item.css"

const TodoListItem = ( {label, onDeleted, onToggleImportant,
  onToggleDone, done, important} ) => {

  let classNames = 'todo-list-item';
  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important'
  }

  return (
    <span className={classNames}>
      <span
        className='todo-list-item-label'
        onClick={onToggleDone}>
        {label}
      </span>

      <div>
        <button type='button'
                className='btn btn-outline-danger btn-sm float-right'
                onClick={onDeleted}>
          <i className='bi bi-trash'/>
        </button>
        <button type='button'
                className='btn btn-outline-success btn-sm float-right'
                onClick={onToggleImportant}>
           <i className="bi bi-exclamation-lg"/>
        </button>
      </div>

    </span>
  );
}

export default TodoListItem;




