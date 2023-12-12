import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// react-router-dom@5.2.0
import './App.css';
import Home from "./routes/Home"
import Registry from "./routes/Registry"


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route path="/" exact >
          <Home/>
          </Route>
          <Route path="/registry">
          <Registry/>
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
