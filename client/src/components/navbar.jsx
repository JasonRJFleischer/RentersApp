import React from "react";
import logo from "../images/house.png";

// stateless functional component

const NavBar = (props) => {
  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <h3>
            <img src={logo} style={{ width: 50, height: 50 }} alt="logo" />{" "}
            Renters App{" "}
          </h3>
        </a>
        <button
          className="btn btn-sm allEvictions"
          onClick={function () {
            window.location.replace("/");
          }}
        >
          All Evictions{" "}
        </button>
        <button
          className="btn btn-sm searchEvictions"
          onClick={function () {
            window.location.replace("/searchDB");
          }}
        >
          Search{" "}
        </button>
        <button
          className="btn btn-sm photoLibrary"
          onClick={function () {
            window.location.replace("/photoLibrary");
          }}
        >
          Photo Library{" "}
        </button>
        <button
          className="btn btn-sm resourceRoom"
          onClick={function () {
            window.location.replace("/resourceRoom");
          }}
        >
          Eviction Resources{" "}
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
