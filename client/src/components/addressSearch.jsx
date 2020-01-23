import React, { Component } from 'react';


class addressSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleChange = event => {
        let target = event.target;
        let name = target.name;
        this.setState({
            [name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        let address = this.state.houseNumber + " " + this.state.streetName;
        localStorage.setItem("address", address)
        console.log(this.state);
        window.location.replace('/addressResults')
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h4>Street Address Lookup</h4>
                    <div className="container">
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormField">
                                <div className="FormField">
                                    <label for="houseNumber">House Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="houseNumber"
                                        name="houseNumber"
                                        value={this.state.houseNumber}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="FormField">
                                    <label for="streetName">Street Name (do not include "Avenue," "Street," "Blvd," etc.)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="streetName"
                                        name="streetName"
                                        value={this.state.streetName}
                                        onChange={this.handleChange} />
                                </div>
                                <br></br>
                                <button
                                    className="btn btn-sm btn-primary entrySubmit"
                                    onClick={this.handleSubmit}
                                >
                                    Lookup{" "}
                                </button>
                                <button
                                    className="btn btn-sm btn-primary entryCancel"
                                    onClick={this.handleCancel}
                                >
                                    Cancel{" "}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default addressSearch;
