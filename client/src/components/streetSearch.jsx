import React, { Component } from 'react';


class streetSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            street: "",
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
        let street = this.state.street;
        localStorage.setItem("street", street)
        console.log(this.state);
        window.location.replace('/streetResults')
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h4>Street Lookup</h4>
                    <div className="container">
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormField">
                                <div className="FormField">
                                    <label for="street">Street Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="street"
                                        name="street"
                                        value={this.state.street}
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
export default streetSearch;
