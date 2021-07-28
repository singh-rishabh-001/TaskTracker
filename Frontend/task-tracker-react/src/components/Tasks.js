import React, { Component } from "react";
import Task from "./Task";

export default class Tasks extends Component {
  async fetchTasks() {
    var res = await fetch("http://127.0.0.1:8000/api/task/");
    const data = await res.json();
    return data;
  }
  componentDidMount() {
    this.fetchTasks().then((data) => this.props.onMount(data));
  }
  deleteTask = (taskId) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`http://127.0.0.1:8000/api/task/${taskId}/`, requestOptions)
      // .then((response) => response.json())
      .then((data) => this.props.onDelete(taskId));
  };

  updateTask = (task) => {
    const completed = task.completed ? false : true;
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        taskId: task.taskId,
        task: task.task,
        completed: completed,
        targetDate: task.targetDate,
      }),
    };
    fetch(`http://127.0.0.1:8000/api/task/${task.taskId}/`, requestOptions)
      .then((response) => response.json())
      .then((data) => this.props.onUpdate(data.taskId, data));
  };
  render() {
    return (
      <div>
        {this.props.tasksList.length > 0 ? (
          <ul className="unordered-list">
            {this.props.tasksList.map((task) => (
              <Task
                key={task.taskId}
                task={task}
                onDelete={this.deleteTask}
                onUpdate={this.updateTask}
              />
            ))}
          </ul>
        ) : (
          "No Tasks to Show"
        )}
      </div>
    );
  }
}

// import React, { Component } from 'react'

// import Task from './Task'
// import AddTask from './AddTask'

// export class Tasks extends Component {

//     constructor() {
//         super()
//         this.state = {
//             tasks: [],
//             task: '',
//             formOpen: false,
//             toggleBtnTitle: "Add",
//         }
//     }

// async fetchTasks() {
//     var res = await fetch('http://127.0.0.1:8000/task-list/')
//     const data = await res.json()
//     this.setState({ tasks: data })
// }
//     updateState = (data) => {

//         let newstate = [...this.state.tasks]
//         const idx = newstate.findIndex((task) => { return task.taskId === data.taskId })
//         const val = newstate[idx].completed
//         newstate[idx].completed = (val) ? false : true

//         this.setState(state => ({
//             tasks: [...newstate]
//         })
//         )
//     }
//     updateComplete = (taskId, task, completed) => {

// completed = (completed) ? false : true
// const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         taskId: taskId,
//         task: task,
//         completed: completed
//     })
// };
// fetch(`http://127.0.0.1:8000/task-update/${taskId}/`, requestOptions)
//     .then((response) => response.json())
//     .then(data => this.updateState(data))
//     }
//     deleteState = (taskId) => {

// const newstate = this.state.tasks.filter((task) => { return task.taskId !== taskId })

// this.setState(state => ({
//     tasks: [...newstate]
// })
// )
//     }
//     deleteTask = (taskId) => {
// const requestOptions = {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' }
// };
// fetch(`http://127.0.0.1:8000/task-delete/${taskId}/`, requestOptions)
//     .then((response) => response.json())
//     .then(data => this.deleteState(taskId))
//     }

//     addNewTask = (data) => {
//         this.setState((state) => ({
//             tasks: [...state.tasks, data]
//         }))
//     }

//     listItems() {

//         const mylist = this.state.tasks.map(
//             (task) =>
//                 <Task key={task.taskId}
//                     task={task}
//                     onDelete={this.deleteTask}
//                     onUpdate={this.updateComplete}
//                 />
//         )

//         return <ul style={{ listStyleType: "none", padding: '0px' }}>{mylist}</ul>
//     }

//     componentDidMount() {
//         this.fetchTasks()
//     }

//     toggleForm = () => {
//         (this.state.formOpen) ?
//             (this.setState({ formOpen: false, toggleBtnTitle: "Add" })) :
//             (this.setState({ formOpen: true, toggleBtnTitle: "Close" }))
//     }

//     createNewTask = (e) => {
//         e.preventDefault();
//         const task = this.state.task
//         if (task.trim() === '')
//             return
//         const tag = document.getElementById('submitBtn')
//         tag.disabled = true
// const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         task: task,
//     })
// };
// fetch('http://127.0.0.1:8000/create-task/', requestOptions)
//     .then((response) => response.json())
//     .then(data => {
//         this.setState((state) => ({ task: '', tasks: [data, ...state.tasks] }))
//         tag.disabled = false
//     })

//     }

//     onChangeTask = (e) => {
//         this.setState((state) => ({ task: e.target.value }))
//     }
//     render() {
//         return (
//             <div className="container">
//                 <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

//                     <button type="button"
//                         onClick={this.toggleForm}
//                         className={`btn ${(this.state.formOpen) ? ('btn-danger') : ('btn-primary')}`}

//                     >
//                         {this.state.toggleBtnTitle}
//                     </button>

//                 </div>
//                 <div className={`${(this.state.formOpen) ? ('form-open') : ('form-close')}`}>
//                     <AddTask task={this.state.task} onsubmit={this.createNewTask} onTaskChange={this.onChangeTask} />
//                 </div>

//                 {(this.state.tasks.length > 0) ? this.listItems() : "No Tasks To Show !!"}
//             </div>

//         )
//     }
// }

// export default Tasks
