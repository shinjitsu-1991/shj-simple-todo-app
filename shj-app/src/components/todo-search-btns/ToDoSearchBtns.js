import React from "react";
import ReactDOM from "react-dom";
import "./ToDoSearchBtns.css";

const ToDoSearchBtns = (props) => {
    const btns = [
        {name: 'All', label: 'all'},
        {name: 'Active', label: 'active'},
        {name: 'Done', label: 'done'}
    ];

    const btnsMarkup = btns.map((item) => {
        let classes = 'btn';
        if(props.currentButton === item.label) {
            classes += ' btn-active';
        }
        return <button className={classes} key={item.label} onClick={() => props.editSearchBtnsVal(item.label)}>{item.name}</button>
    });
    return (
      <div className="todo-search-btns">
          {btnsMarkup}
      </div>
    );
};

export default ToDoSearchBtns;