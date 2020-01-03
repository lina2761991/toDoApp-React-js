import React from "react";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false
    };
  }

  toggleCheck = () => {
    // console.log(this.state.isComplete.toString());

    this.setState({
      isComplete: !this.state.isComplete
    });
  };

  updatef = e => {
    e.preventDefault();
    var updated = this.props.tasks.filter(
      (element, i) => element.title !== this.props.task
    );
    this.props.updatef(e, updated);

    console.log(this);
  };

  render() {
    return (
      <li className="list-group-item checkbox">
        <div className="row">
          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label>
              <input
                onChange={this.toggleCheck}
                id="toggleTaskStatus"
                type="checkbox"
                value=""
              ></input>
            </label>
          </div>
          <div
            className={`col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${
              this.state.isComplete ? "complete" : ""
            }`}
          >
             {this.props.task} 
          </div>

          <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <a onClick={this.updatef} className="" href="/">
              <i
                id="deleteTask"
                data-id={this.props.id}
                className="delete-icon glyphicon 
            glyphicon-trash"
              ></i>
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default ToDo;
