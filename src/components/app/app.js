import React from 'react';

import AppHeader from '../app-header';
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import TodoList from '../todo-list';

import './app.css';

const App = () => {

  const todoData = [
    { label: 'Drink bear', important: false, id: 0},
    { label: 'Create App', important: false, id: 1},
    { label: 'Drink milk', important: true, id: 2}
  ];

  return (
    <div className='todo-app' >
      <AppHeader todo={21} done={3} />

      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={ todoData }/>
    </div>
  );
};

export default App;