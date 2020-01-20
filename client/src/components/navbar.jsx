import React from 'react';

// stateless functional component

const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href='/'>
                <h3>Cleveland Evictions{" "}</h3>
            </a>
            <button className="btn btn-sm landlordSearch"
                onClick={function () {
                    window.location.replace("/search");
                }}
            >
                Search for Landlord{" "}
            </button>
        </nav>);
}

export default NavBar;