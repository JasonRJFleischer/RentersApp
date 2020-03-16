import React, { Component } from 'react';

class Landlords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        }
    };

    componentDidMount() {
        fetch("http://localhost:8000/api/landlords")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    };

    render() {
        return (
            <div>
                <div>
                    <h5>Landlord Search
                    < button className="btn btn-sm landlordSearch"
                            onClick={
                                function () {
                                    window.location.replace("/landlordSearch");
                                }}
                        >
                            Seach by Name{" "}
                        </ button>
                        <button className="btn btn-sm addressSearch"
                            onClick={function () {
                                window.location.replace("/addressSearch");
                            }}
                        >
                            Search by Address{" "}
                        </button>
                        <button className="btn btn-sm streetSearch"
                            onClick={function () {
                                window.location.replace("/streetSearch");
                            }}
                        >
                            Search a Street{" "}
                        </button>
                        <button className="btn btn-sm zipSearch"
                            onClick={function () {
                                window.location.replace("/zipSearch");
                            }}
                        >
                            Look up a Zip Code{" "}
                        </button>

                    </h5>
                </div>
                <div>
                    <ul>
                        {this.state.data.map(data => (
                            <li>{data.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Landlords;
