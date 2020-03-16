import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import evictionDisplay from './components/evictionDisplay';
import NavBar from './components/navbar.jsx';
import landlordSearch from './components/landlordSearch';
import landlordResults from './components/landlordSearchResults';
import newLandlordResults from './components/newLandlordSearchResults';
import streetSearch from './components/streetSearch';
import addressSearch from './components/addressSearch';
import zipSearch from './components/zipSearch';
import streetResults from './components/streetResults';
import addressResults from './components/addressResults';
import zipResults from './components/zipResults';
import Home from './components/home';
import Photos from './components/photoLibrary';
import Resources from './components/resourceRoom';
import Landlords from './components/landlords';



function App() {
  return (
    <Router>
      <NavBar />
      <br />
      <div className="container-fluid MainPage">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/" component={evictionDisplay} /> */}
              <Route exact path="/landlords" component={Landlords} />
              <Route exact path="/landlordSearch" component={landlordSearch} />
              <Route exact path="/landlordResults" component={landlordResults} />
              <Route exact path="/newLandlordResults" component={newLandlordResults} />
              <Route exact path="/streetSearch" component={streetSearch} />
              <Route exact path="/streetResults" component={streetResults} />
              <Route exact path="/addressSearch" component={addressSearch} />
              <Route exact path="/addressResults" component={addressResults} />
              <Route exact path="/zipSearch" component={zipSearch} />
              <Route exact path="/zipResults" component={zipResults} />
              <Route exact path="/photoLibrary" component={Photos} />
              <Route exact path="/resourceRoom" component={Resources} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
