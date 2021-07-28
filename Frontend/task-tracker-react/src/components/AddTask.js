import React, { Component } from "react";
import "../css/Auth.css";

export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      taskError: "",
      completed: false,
      targetDate: "",
      targetDateError: "",
      submitBtn: "Add",
    };
    this.onTaskChange = this.onTaskChange.bind(this);
    this.onCompletedChange = this.onCompletedChange.bind(this);
  }
  componentDidMount() {
    this.setState({ targetDate: new Date().toLocaleDateString() });
  }
  onTaskChange = (e) => {
    const taskVal = e.target.value;
    this.setState({ task: taskVal });
  };
  onCompletedChange = (e) => {
    const completedVal = e.target.checked;
    this.setState({ completed: completedVal });
  };
  onChangeDate = (e) => {
    const targetDate = e.target.value;
    this.setState({ targetDate: targetDate });
  };
  onSubmit = (e) => {
    e.preventDefault();
    // submitting form data
    const data = {
      task: this.state.task,
      completed: this.state.completed,
      targetDate: this.state.targetDate,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    this.setState({
      taskError: "",
      targetDateError: "",
    });
    fetch("http://127.0.0.1:8000/api/task/", requestOptions)
      .then(async (response) => {
        const data = await response.json();
        if (response.status === 201) {
          this.props.onAdd(data);
        } else {
          this.setState({
            taskError: data.task,
            targetDateError: data.targetDate,
          });
        }
      })
      .catch((err) => alert(err));

    this.setState({
      task: "",
      completed: false,
      targetDate: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label style={{ width: "100%" }}>
          Task:<span className="requiredStar"></span>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Add your task here"
            value={this.state.task}
            onChange={this.onTaskChange}
          />
          <small style={{ color: "red" }}>{this.state.taskError}</small>
        </label>
        <div className="row mt-3">
          <div className="col">
            <label style={{ display: "inline" }}>
              Date:<span className="requiredStar"></span>
            </label>
            <input
              type="date"
              id="mydate"
              value={this.state.targetDate}
              onChange={this.onChangeDate}
              style={{ display: "inline" }}
              className="form-control mt-1"
            />
            <small style={{ color: "red" }}>{this.state.targetDateError}</small>
          </div>

          <label className="col" style={{ marginTop: "30px" }}>
            Completed:
            <input
              type="checkbox"
              className="form-check-input"
              checked={this.state.completed}
              onChange={this.onCompletedChange}
              style={{ marginLeft: "20px" }}
            />
          </label>
        </div>

        <div style={{ textAlign: "center" }}>
          <input
            type="submit"
            value={this.state.submitBtn}
            id="submitBtn"
            className="btn-submit mt-3"
            style={{ display: "inline-block", marginLeft: "30px" }}
          />
        </div>
      </form>
    );
  }
}
