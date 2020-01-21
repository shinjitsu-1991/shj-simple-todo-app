import React from "react";
import ReactDOM from "react-dom";
import "./ToDoFoter.css";

export default class ToDoFooter extends React.Component {
    constructor() {
        super();

        this.state = {
            label: ''
        }
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdded(this.state.label)
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="todo-footer">
                <input onChange={this.onLabelChange} placeholder="Add new" type="text" value={this.state.label}/>
                <button>Add</button>
            </form>
        );
    }
}