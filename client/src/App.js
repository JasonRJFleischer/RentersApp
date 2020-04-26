import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { SearchDB, evictionDisplay, NavBar, Home, Photos, Resources, Landlords } from './components/index'


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
              <Route exact path="/landlords" component={Landlords} />
              <Route exact path="/photoLibrary" component={Photos} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/evictions" component={evictionDisplay} />
              <Route exact path="/resourceRoom" component={Resources} />
              <Route exact path="/searchDB" component={SearchDB} />
              {/* <Route exact path="/resourceRoom" component={Resources} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
