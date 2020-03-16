import React from 'react';
import logo from "../images/house.png"

// stateless functional component

const NavBar = props => {
    return (
        <div className="container">
            <nav className="navbar fixed-top navbar-light bg-light">
                <a className="navbar-brand" href='/'>
                    <h3><img src={logo} style={{ width: 50, height: 50 }} alt="logo" />  Renters App{" "}</h3>
                </a>
                <button className="btn btn-sm allEvictions"
                    onClick={function () {
                        window.location.replace("/");
                    }}
                >
                    All Evictions{" "}
                </button>
                <button className="btn btn-sm allLandlords"
                    onClick={function () {
                        window.location.replace("/landlords");
                    }}
                >
                    Landlord Search{" "}
                </button>
                <button className="btn btn-sm photoLibrary"
                    onClick={function () {
                        window.location.replace("/photoLibrary");
                    }}
                >
                    Photo Library{" "}
                </button>
                <button className="btn btn-sm resourceRoom"
                    onClick={function () {
                        window.location.replace("/resourceRoom");
                    }}
                >
                    Eviction Resources{" "}
                </button>
                {/* <button className="btn btn-sm landlordSearch"
                    onClick={function () {
                        window.location.replace("/landlordSearch");
                    }}
                >
                    Look up Landlord{" "}
                </button>
                <button className="btn btn-sm addressSearch"
                    onClick={function () {
                        window.location.replace("/addressSearch");
                    }}
                >
                    Look up Address{" "}
                </button>
                <button className="btn btn-sm streetSearch"
                    onClick={function () {
                        window.location.replace("/streetSearch");
                    }}
                >
                    Look up Street Name{" "}
                </button>
                <button className="btn btn-sm zipSearch"
                    onClick={function () {
                        window.location.replace("/zipSearch");
                    }}
                >
                    Look up Zip Code{" "}
                </button> */}
            </nav >
        </div>)
}

export default NavBar;