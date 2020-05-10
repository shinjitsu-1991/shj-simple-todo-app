import React from 'react';
import "./ToDoSearch.css";
import ToDoSearchBtns from "components/ToDoSearchBtns";

export default class ToDoSearch extends React.Component{
    constructor() {
      super();

      this.state = {
          label: ''
      }
    };

    changeSearchValue = (e) => {
        this.props.editSearchValue(e.target.value)
        this.setState({
            label: e.target.value
        })
    };

    render() {
        return (
            <div className="todo-search">
                <input onChange={this.changeSearchValue} placeholder="Search" type="text" value={this.state.label}/>
                <ToDoSearchBtns currentButton={this.props.currentButton} editSearchBtnsVal={this.props.editSearchBtnsVal}/>
            </div>
        );
    }
}