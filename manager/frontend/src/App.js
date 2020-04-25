import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import CustomersList from './CustomersList'
import CustomerCreateUpdate from './CustomerCreateUpdate'
import './App.css';

const BaseLayout = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Manager Customer</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav mr-auto">
          <li class="nav-item"><a className="nav-item nav-link" href="/">CUSTOMERS</a></li>
          <li class="nav-item"><a className="nav-item nav-link" href="/customer">CREATE CUSTOMER</a></li>
        </ul>
      </div>
    </nav>

    <div className="content">
      <Route path="/" exact component={CustomersList} />
      <Route path="/customer/:pk" component={CustomerCreateUpdate} />
      <Route path="/customer/" exact component={CustomerCreateUpdate} />
    </div>

  </div>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    );
  }
}

export default App;