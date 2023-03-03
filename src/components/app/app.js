import React, {Component} from 'react';

import AppHeader from '../app-header';
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import TodoList from '../todo-list';
import ItemAddForm from "../item-add-form";

import './app.css';

export default class App extends Component {
  maxId = 100;

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

    this.setState( ({ todoData }) => {
      const arr = todoData.filter( item => item.id !== id);
      return { todoData: arr };
    })
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    }

    this.setState(({ todoData }) => {
      return ({
        todoData: [...todoData, newItem]
      });
    })
  };

  render() {

    const { todoData } = this.state;

    return (
      <div className='todo-app' >
        <AppHeader todo={21} done={todoData.length} />

        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={ todoData }
          onDeleted={ this.deleteItem }/>

        <ItemAddForm onItemAdd={this.addItem}/>
      </div>
    );
  }
}

