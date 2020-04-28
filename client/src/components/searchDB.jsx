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
      data: [],
      resultsLength: "",
      results: false,
      error: "No results found",
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
            resultsLength: res.length,
            results: true,
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
    if (!this.state.results) {
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
    } else if (this.state.resultsLength <= 0) {
      return (
        <div className="container-fluid">
          <h5>No results found</h5>
        </div>
      );
    } else {
      return (
        <div>
          <h4>Search Results</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Plaintiff</th>
                <th scope="col">Address</th>
                <th scope="col">Filing Date</th>
                <th scope="col">Move Out Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((data) => (
                <tr>
                  <th>{data.plaintiff}</th>
                  <td scope="row">
                    {data.address.addressLine1}
                    <br></br>
                    {/* {data.address.addressLine2}
                  <br></br>
                  {data.address.addressLine3}
                  <br></br> */}
                    {data.address.city}, {data.address.state} {data.address.zip}
                  </td>
                  <td>{data.filingDate}</td>
                  <td>{data.moveoutDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
export default SearchDB;
