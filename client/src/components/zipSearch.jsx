import React, { Component } from 'react';


class zipSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: "",
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
        let zip = this.state.zipCode;
        localStorage.setItem("zip", zip)
        console.log(this.state);
        window.location.replace('/zipResults')
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h4>Zip Code Lookup</h4>
                    <div className="container">
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormField">
                                <div className="FormField">
                                    <label for="zipCode">Zip Code</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="zipCode"
                                        name="zipCode"
                                        value={this.state.zipCode}
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
export default zipSearch;
