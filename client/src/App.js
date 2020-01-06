import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import evictionDisplay from './components/evictionDisplay';
import NavBar from './components/navbar.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <br />
      <div className="container-fluid MainPage">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path="/" component={evictionDisplay} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
