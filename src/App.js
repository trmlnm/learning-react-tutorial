import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import About from './Views/About';
import Home from './Views/Home';

function App() {
  return (
    <div>
      
      <Router>
        <Header />
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      
        <Footer />
      </Router>
      
      
    </div>
  );
}

export default App;
