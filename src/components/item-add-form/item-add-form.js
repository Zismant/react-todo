import React from "react";
import './item-add-form.css';

const ItemAddForm = ( {onItemAdd} ) => {

  return (
    <div className='item-add-form'>
      <button
        className='btn btn-outline-secondary'
        onClick={() =>onItemAdd('Hello')}>
        Add item
      </button>
    </div>
  )
}

export default ItemAddForm;