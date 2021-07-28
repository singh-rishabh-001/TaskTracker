import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default class Task extends Component {
  render() {
    return (
      <li
        style={
          this.props.task.completed
            ? { backgroundColor: "rgba(146, 255, 155, 0.8)" }
            : { backgroundColor: "rgba(157, 146, 255, 0.8)" }
        }
        className="list-item"
      >
        <label>
          <input
            type="checkbox"
            defaultChecked={this.props.task.completed}
            onChange={() => this.props.onUpdate(this.props.task)}
          />
          {this.props.task.completed ? (
            <del>
              <i>{this.props.task.task}</i>
            </del>
          ) : (
            this.props.task.task
          )}
        </label>
        <button
          type="button"
          onClick={() => this.props.onDelete(this.props.task.taskId)}
          className="btn btn-danger btn-sm"
          style={{ display: "inline", float: "right", height: "80%" }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <br />
        <small style={{ fontSize: "12px" }}>{this.props.task.targetDate}</small>
      </li>
    );
  }
}
