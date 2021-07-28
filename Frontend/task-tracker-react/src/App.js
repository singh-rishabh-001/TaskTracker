import React from 'react'

import { BrowserRouter, Route } from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import Header from './components/Header'
import TaskHome from './components/TaskHome'
import Auth from "./components/Auth"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Auth />
        </Route>
        <Route path="/tasks">
          <div>
            <Header title="Task Tracker" />
            <TaskHome />
          </div>
        </Route>
      </BrowserRouter>

    )
  }
}
export default App;
