import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './common/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Offerings from './pages/offerings/Offerings';
import SecretSauce from './pages/secretsauceshowcase/SecretSauce';
import OurStory from './pages/ourStory/OurStory';
import Beneficiaries from './pages/beneficiaries/Beneficiaries';
import Clients from './pages/clients/Clients';
import FaqPage from './pages/faq/FaqPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/offerings' component={Offerings}/>
            <Route exact path='/showcase' component={SecretSauce}/>
            <Route exact path='/story' component={OurStory}/>
            <Route exact path='/beneficiaries' component={Beneficiaries}/>
            <Route exact path='/clients' component={Clients} />
            <Route exact path='/faq' component={FaqPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
