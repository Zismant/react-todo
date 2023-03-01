import React from "react";
import './app-header.css'
const AppHeader = () => {
  return (
    <div className={'app-header'}>
      <h1>My Todo List</h1>
      <span>{1} more to do,{3} done</span>
    </div>
  );
};

export default AppHeader;