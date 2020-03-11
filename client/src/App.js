import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/layout/Navbar';
import TodosList from './components/todos-list';
import EditTodo from './components/edit-todo';
import CreateTodo from './components/create-todo';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>MERN-Stack CRUD App</h1>
          <Navbar />
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" exact component={EditTodo} />
          <Route path="/create" exact component={CreateTodo} />
        </div>
      </Router>
    );
  }
}
