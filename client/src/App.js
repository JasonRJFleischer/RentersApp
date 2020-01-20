import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import evictionDisplay from './components/evictionDisplay';
import NavBar from './components/navbar.jsx';
import landlordSearch from './components/landlordSearch';
import landlordSearchResults from './components/landlordSearchResults';

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
              <Route exact path="/search" component={landlordSearch} />
              <Route exact path="/results" component={landlordSearchResults} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
