import React from "react";

const filterButtons = [
  {name: 'All', label: 'All' },
  {name: 'Active', label: 'Active'},
  {name: 'Done', label: 'Done'},
];

const ItemStatusFilter = ( { filter, activeFilter } ) => {

  const arrButtons = filterButtons.map( (item,index) => {
      const styleBtn = filter === item.name ? 'btn btn-info' : ' btn btn-outline-secondary';
      return (
          <button type='button'
                  key={index + item.name}
                  className={ styleBtn }
                  onClick={ () => activeFilter(item.name) }>
            { item.label }
          </button>
      );
    });

  return <div className='btn-group'>{arrButtons}</div>;

};

export default ItemStatusFilter;




