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
       {label: 'Забити москаля', important: true, done: false, id: 0},
       {label: 'Задонатити на ЗСУ', important: false, done: false, id: 1},
       {label: 'Попити пива', important: false, done: true, id: 2}
     ],
    filter: 'All',
    term: ''
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

  onFilterChange = (name) => {
    this.setState({ filter: name });
  };

  filterItems = (items) => {
    switch (this.state.filter) {
      case "Done":
        return items.filter(item => item.done === true);
      case 'Active':
        return items.filter(item => item.done === false);
      default:
        return items;
    }
  };

  searchItems = (items, term) => {
    if (items.length === 0) {
      return items;
    }

    return items.filter( (item) => {
      return item.label
        .toLowerCase()
        .indexOf(term.toLowerCase()) !== -1;
    });
  };

  onSearchChange = (term) => {
    this.setState({ term: term });
  };

  render() {

    const { todoData, filter, term } = this.state;
    const doneCount = todoData.filter(item => item.done).length;
    const todoCount = todoData.length - doneCount;
    const visibleItems = this.searchItems(this.filterItems(todoData), term);

    return (
      <div className='todo-app' >
        <AppHeader todo={todoCount} done={doneCount} />

        <div className='top-panel d-flex'>
          <SearchPanel
            onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter activeFilter={this.onFilterChange}
                            filter={ filter } />
        </div>

        <TodoList
          todos={ visibleItems }
          onDeleted={ this.deleteItem }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>

        <ItemAddForm onItemAdd={this.addItem}/>
      </div>
    );
  };


}

