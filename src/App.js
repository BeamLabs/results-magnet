import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Offerings from './pages/offerings/Offerings';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/offerings' component={Offerings}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
