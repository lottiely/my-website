import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

//pages
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Hobbies from './components/hobbies';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/hobbies" component={Hobbies} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
