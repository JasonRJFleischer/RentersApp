import React, { Component } from "react";

class evictionDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/landlords")
      .then((res) => {
        return res.json();
      })
      .then(
        (res) => {
          this.setState({
            data: res,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <div>
        <h4>Evictions in Cleveland</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Plaintiff</th>
              <th scope="col">Address</th>
              <th scope="col">Filing Date</th>
              <th scope="col">Move Out Date</th>
              {/* <th scope="col">Tax Info</th> */}
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
export default evictionDisplay;
