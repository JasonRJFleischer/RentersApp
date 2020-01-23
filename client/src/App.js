import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import evictionDisplay from './components/evictionDisplay';
import NavBar from './components/navbar.jsx';
import landlordSearch from './components/landlordSearch';
import landlordResults from './components/landlordSearchResults';
import streetSearch from './components/streetSearch';
import addressSearch from './components/addressSearch';
import streetResults from './components/streetResults';
import addressResults from './components/addressResults';

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
              <Route exact path="/landlordSearch" component={landlordSearch} />
              <Route exact path="/landlordResults" component={landlordResults} />
              <Route exact path="/streetSearch" component={streetSearch} />
              <Route exact path="/streetResults" component={streetResults} />
              <Route exact path="/addressSearch" component={addressSearch} />
              <Route exact path="/addressResults" component={addressResults} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
