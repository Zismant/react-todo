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
       this.createTodoItem('Drink bear'),
       this.createTodoItem('Create App'),
       this.createTodoItem('Drink milk')
    ]
  };

  createTodoItem(label) {
    return  {
      label: label,
      important: false,
      done: false,
      id: this.maxId++,
    }
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
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      return ({
        todoData: [...todoData, newItem]
      });
    })
  };

  toggleProperty = (arr, id, propName) => {
      return arr.map( item => (
        item.id === id ? {...item, [propName]: !item[propName]} : item)
      );
  };

  onToggleImportant = (id) => {
    this.setState( ({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState( ({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  activeFilter = (name) => {
    console.log(name);
  };

  render() {

    const { todoData } = this.state;
    const doneCount = todoData.filter(item => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className='todo-app' >
        <AppHeader todo={todoCount} done={doneCount} />

        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter activeFilter={this.activeFilter} />
        </div>

        <TodoList
          todos={ todoData }
          onDeleted={ this.deleteItem }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>

        <ItemAddForm onItemAdd={this.addItem}/>
      </div>
    );
  };
}

