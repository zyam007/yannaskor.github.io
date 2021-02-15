import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import NotFound from './NotFound';
import Landing from './Landing';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route default component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
