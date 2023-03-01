import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './components/todo-list/todo-list';
import AppHeader from './components/app-header/app-header';
import SearchPanel from "./components/ search-panel/search-panel";

const App = () => {

  const todoData = [
    { label: 'Drink', important: false, id: 0},
    { label: 'Create App', important: false, id: 1},
    { label: 'Drink milk', important: true, id: 2}
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={ todoData }/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);


