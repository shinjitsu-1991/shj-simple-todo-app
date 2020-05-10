import React from 'react';
import "./ToDoHead.css";

const ToDoHead = (props) => {
  return (
      <div className="todo-head">
        <h1>My ToDo</h1>
        <div className="todo-head-info">
          {props.todo} more to do, {props.done} done
        </div>
      </div>
  );
};

export default ToDoHead;