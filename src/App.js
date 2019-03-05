import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route path = '/about' component={About} />
          <Redirect to = "/" />
        </Switch>
      </div>
    )
  }
}


export default App;
