import React from 'react';
import "./ToDoApp.css";
import ToDoHead from "components/ToDoHead";
import ToDoSearch from "components/ToDoSearch";
import ToDoList from "components/ToDoList";
import ToDoFooter from "components/ToDoFooter";
import EditToDoData from "services/data-from-localstorage/index"

export default class ToDoApp extends React.Component {
    constructor() {
        super();

        this.data = new EditToDoData();
        this.state = {
            todoData: this.data.getData(),
            searchBtns: 'all',
            searchVal: ''
        };
    }

    maxId = () => {
        return Math.floor(Math.random() * (9999999 - 0 + 1)) + 0
    };

    deleteItem = (id) => {
        this.data.removeItem(id);
        this.setState({
                todoData: this.data.getData()
            }
        )
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            done: false,
            id: this.maxId()
        };
        this.data.addItem(newItem);
        this.setState({
                todoData: this.data.getData()
            }
        )
    };

    onToggleDone = (id) => {
        this.data.editItemParam(id, 'done');
        this.setState({
                todoData: this.data.getData()
            }
        )
    };

    onToggleImportant = (id) => {
        this.data.editItemParam(id, 'important');
        this.setState({
                todoData: this.data.getData()
            }
        )
    };

    getDoneCount = () => {
        const doneCount = this.state.todoData.filter((el) => el.done);
        return doneCount.length;
    };

    getTodoCount = () => {
        const doneCount = this.state.todoData.filter((el) => !el.done);
        return doneCount.length;
    };

    editSearchValue = (val) => {
        this.setState({
            searchVal: val
        });
    };

    editSearchBtnsVal = (val) => {
        this.setState({
            searchBtns: val
        })
    };

    addDataAfterFilter = () => {
        if(this.state.searchVal.length < 1) {
            return this.editDataForBtnsState(this.state.todoData);
        }
        return this.editDataForBtnsState(this.state.todoData.filter((el) => el.label.toLowerCase().includes(this.state.searchVal.toLowerCase())));
    };

    editDataForBtnsState = (data) => {
        switch (this.state.searchBtns) {
            case "all": return data;
            case "active": return data.filter((el) => !el.done);
            case "done": return data.filter((el) => el.done);
            default: return data;
        }
    };

    render() {
        return(
            <div className="todo-main">
                <ToDoHead todo={this.getTodoCount()} done={this.getDoneCount()} />
                <ToDoSearch editSearchValue={this.editSearchValue} editSearchBtnsVal={this.editSearchBtnsVal} currentButton={this.state.searchBtns}/>
                <ToDoList data={this.addDataAfterFilter()} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant}/>
                <ToDoFooter onAdded={this.addItem}/>
            </div>
        );
    };
}