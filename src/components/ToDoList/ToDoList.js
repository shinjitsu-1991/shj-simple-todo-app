import React from 'react';
import ToDoListItem from "components/ToDoListItem";

const ToDoList = (props) => {

    const itemsList = props.data.map((item) => {
        return <li className="list-group-item" key={item.id}>
            <ToDoListItem
            onDeleted={()=>props.onDeleted(item.id)}
            onToggleDone={() => props.onToggleDone(item.id)}
            onToggleImportant={() => props.onToggleImportant(item.id)}
            label={item.label}
            done={item.done}
            important={item.important}/>
        </li>
    });
    return(
        <ul className="list-group">
            {itemsList}
        </ul>
    );
};

export default ToDoList;