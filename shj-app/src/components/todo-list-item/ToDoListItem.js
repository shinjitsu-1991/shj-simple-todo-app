import React from "react";
import ReactDOM from "react-dom";
import styles from './ToDoListItem.css';

export default class ToDoListItem extends React.Component{

    render() {
        let itemCLasses = 'todo-list-item';

        if(this.props.done) {
            itemCLasses += ' done';
        }

        if(this.props.important) {
            itemCLasses += ' important';
        }

        return (
            <div className={itemCLasses}>
                <span onClick={this.props.onToggleDone} className="list-item"><i>{ this.props.label }</i></span>
                <div className="todo-list-item_btns">
                    <button onClick={this.props.onDeleted} className="item-delete">&#xd7;</button>
                    <button onClick={this.props.onToggleImportant} className="item-important">&#33;</button>
                </div>
            </div>
        );
    }
}