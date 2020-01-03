import React from "react";
import ToDo from "./ToDo";
import tasks from "../data.js";

class InputComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
      inputValue: ''

    };
  }


  updatef = (e, array) => {
    e.preventDefault();
    this.setState({
      tasks: array,
      
    });
  };

  add = (e)=>{
    let newTask = {
      title: this.state.inputValue,
      id:tasks[tasks.length-1].id+1,
    };
    tasks.push(newTask);
    
    console.log(tasks)
    this.updatef(e,tasks);
    this.setState({
      inputValue: ''
    });

  }

  updateInputValue =  (evt) =>{
    this.setState({
      inputValue: evt.target.value
    });

   // console.log(this.state.inputValue)
  }

  render() {
    return (
      <div className="all">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                To Do App
              </a>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="content-area row">
            <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12">
              <div className="row input-area">
                <div id="titles">
                  <h2>To Do App!</h2>
                  <h5>Add New To-Do</h5>
                </div>
                <div className="col-md-1"></div>

                <div className="form-group col-md-12">
                  <input
                    type="text"
                   // placeholder="Enter new task"
                    value={this.state.inputValue}
                    className="form-control"
                    id="addTask"
                    onChange={this.updateInputValue}
                  ></input>
                </div>
                <div className="form-group col-md-1">
                  <button className="btn" onClick={this.add}>Add</button>
                </div>
                <div className="col-md-1"></div>
              </div>

              <ul className="list-group container" id="taskList">
                {this.state.tasks.map((element, i) => {
                  return (
                    <ToDo
                      tasks={this.state.tasks}
                      element={element}
                      updatef={this.updatef}
                      task={element.title}
                      key={element.id}
                      id={element.id}
                    />
                  );
                })}
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputComponents;
