import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };
    render() {
        return (
            <div>
                <h1>Welcome to the Renters App</h1>
                <br></br>
                <h4>Select an option to continue</h4>
                <ul>
                    <li>Landlord Search</li>
                    <li>Photo Library</li>
                    <li>Eviction Resources</li>
                </ul>
            </div>
        )
    }
}

export default Home;
