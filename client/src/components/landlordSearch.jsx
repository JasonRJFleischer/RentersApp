import React, { Component } from 'react';


class landlordSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plaintiff: "",
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
        let plaintiff = this.state.plaintiff;
        localStorage.setItem("plaintiff", plaintiff)
        console.log(this.state);
        window.location.replace('/results')
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h4>Landlord Lookup</h4>
                    <div className="container">
                        <div className="FormCenter">
                            <form onSubmit={this.handleSubmit} className="FormField">
                                <div className="FormField">
                                    <label for="plaintiff">Landlord Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="plaintiff"
                                        name="plaintiff"
                                        value={this.state.plaintiff}
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
export default landlordSearch;
