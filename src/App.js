import React from 'react';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Tenders from './Tenders/Tenders';
import Contact from './Contact/Contact';
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects/Projects';

const App = () => {
  return (
      <>
          <Navbar />
          {/* <Home /> */}
          <Switch>
              <Route exact path="/K-Ride" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              {/* <Route exact path="/annual-reports" component={} />
              <Route exact path="/extracts-of-annual-return" component={} /> */}
                <Route exact path="/tenders" component={Tenders} />
                {/* <Route exact path="/media" component={} />
                <Route exact path="/rti" component={} />
                <Route exact path="/careers" component={} />  */}
              <Route exact path="/contact" component={Contact} />
          </Switch>
      </>
  );
}

export default App;
