import React from 'react';

// stateless functional component

const NavBar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href='/'>
                <h3>Cleveland Evictions{" "}</h3>
            </a>
        </nav>);
}

export default NavBar;