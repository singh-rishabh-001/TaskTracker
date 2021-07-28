import React, { Component } from "react";

import Tasks from "./Tasks";
import AddTask from "./AddTask";

export default class TaskHome extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  intitializeTask = (responseTask) => {
    this.setState((state) => ({
      tasks: responseTask,
    }));
  };
  deleteTaskState = (taskId) => {
    const newstate = this.state.tasks.filter((task) => task.taskId !== taskId);

    this.setState((state) => ({
      tasks: [...newstate],
    }));
  };
  addTaskState = (task) => {
    this.setState((prevState) => ({
      tasks: [task, ...prevState.tasks],
    }));
  };
  updateTaskState = (taskId, data) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
        if (task.taskId === taskId) {
          const newtask = {
            taskId: taskId,
            task: data.task,
            completed: data.completed,
            targetDate: data.targetDate,
          };
          return newtask;
        }
        return task;
      }),
    }));
  };

  render() {
    return (
      <div className="flex-container">
        <div>
          <Tasks
            onMount={this.intitializeTask}
            tasksList={this.state.tasks}
            onDelete={this.deleteTaskState}
            onUpdate={this.updateTaskState}
          />
        </div>
        <div className="mt-3">
          <div className="form-wrapper">
            <div className="form-header-wrapper">Add Task</div>
            <AddTask onAdd={this.addTaskState} />
          </div>
        </div>
      </div>
    );
  }
}
