import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link
          className="navbar-brand"
          to="/" 
        >
         MERN-Stack CRUD App
        </Link>
        
        <div className='collaps­e nav-collaps­e'>
          <ul className='navbar-nav mr-auto'>
            <li className='navbar-item'>
              <Link to='/' className='nav-link'>Todos</Link>
            </li>
            <li className='navbar-item'>
              <Link to='/create' className='nav-link'>Create Todo</Link>
            </li>
            <li className='navbar-item'>
              <Link to='/edit/:id' className='nav-link'>Edit Todo</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
