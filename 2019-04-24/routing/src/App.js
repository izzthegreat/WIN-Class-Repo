import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Navigation from './components/Navigation.js'
import Error from './components/Error.js'
import './App.css';

class App extends React.Component {
  render () {
    return(
      <BrowserRouter>
      <Navigation/>
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route component={Error}/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
