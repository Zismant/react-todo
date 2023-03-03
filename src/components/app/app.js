import React, {Component} from 'react';

import AppHeader from '../app-header';
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import TodoList from '../todo-list';

import './app.css';

export default class App extends Component {

  state = {
     todoData: [
      { label: 'Drink bear', important: false, id: 0},
      { label: 'Create App', important: false, id: 1},
      { label: 'Drink milk', important: true, id: 2}
    ]
  };

  deleteItem = (id) => {

    // const arr = [...this.state.todoData];
    // const res = arr.filter( item => item.id !== id );

    this.setState( ({todoData}) => {
      const arr = todoData.filter( item => item.id !== id);
      return { todoData: arr };
    })
  };

  render() {

    const { todoData } = this.state;

    return (
      <div className='todo-app' >
        <AppHeader todo={21} done={3} />

        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={ todoData }
          onDeleted={ this.deleteItem }/>
      </div>
    );
  }
}

