import React, { Component } from "react";

class SearchDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plaintiff: "",
      address: "",
      houseNumber: "",
      streetName: "",
      zipCode: "",
      filingDate: "",
      moveoutDate: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleChange = (event) => {
    let target = event.target;
    let name = target.name;
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let searchQuery = "http://localhost:8000/api/landlords" + "/?";
    let landlordSearch = "name=" + this.state.plaintiff;
    let houseSearch = "&house=" + this.state.houseNumber;
    let streetSearch = "&street=" + this.state.streetName;
    let zipSearch = "&zip=" + this.state.zipCode;
    searchQuery =
      searchQuery + landlordSearch + houseSearch + streetSearch + zipSearch;
    fetch(searchQuery)
      .then((res) => {
        return res.json();
      })
      .then(
        (res) => {
          this.setState({
            data: res,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h4>Search</h4>
          <div className="container">
            <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormField">
                <div className="container">
                  <div className="FormField">
                    <label for="plaintiff">Landlord</label>
                    <input
                      type="text"
                      className="form-control"
                      id="plaintiff"
                      name="plaintiff"
                      value={this.state.plaintiff}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="FormField">
                    <label for="houseNumber">House Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="houseNumber"
                      name="houseNumber"
                      value={this.state.houseNumber}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="FormField">
                    <label for="streetName">
                      Street Name (do not include "Street," "Blvd," etc
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="streetName"
                      name="streetName"
                      value={this.state.streetName}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="FormField">
                    <label for="zipCode">Zip Code</label>
                    <input
                      type="number"
                      className="form-control"
                      id="zipCode"
                      name="zipCode"
                      value={this.state.zipCode}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <br></br>
                <button
                  className="btn btn-sm btn-primary searchSubmit"
                  onClick={this.handleSubmit}
                >
                  Lookup{" "}
                </button>
                <button
                  className="btn btn-sm btn-primary searchCancel"
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
export default SearchDB;
