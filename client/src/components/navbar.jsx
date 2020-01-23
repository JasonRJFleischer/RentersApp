import React from 'react';

// stateless functional component

const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href='/'>
                <h3>Renters App{" "}</h3>
            </a>
            <button className="btn btn-sm allEvictions"
                onClick={function () {
                    window.location.replace("/");
                }}
            >
                All Evictions{" "}
            </button>
            <button className="btn btn-sm landlordSearch"
                onClick={function () {
                    window.location.replace("/landlordSearch");
                }}
            >
                Search for Landlord{" "}
            </button>
            <button className="btn btn-sm streetSearch"
                onClick={function () {
                    window.location.replace("/streetSearch");
                }}
            >
                Search for Street Name{" "}
            </button>
            <button className="btn btn-sm addressSearch"
                onClick={function () {
                    window.location.replace("/addressSearch");
                }}
            >
                Search for Street Address{" "}
            </button>
        </nav>);
}

export default NavBar;