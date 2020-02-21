import React, { Component } from 'react';
// import data from '../data/data1.json';

class newLandlordResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // address1: "",
            // address2: "",
            // address3: "",
            // city: "",
            // State: "",
            // zip: "",
            // name: "",
            // filingDate: "",
            // moveOutDate: "",
            error: null,
            isLoaded: false,
            data: []
        }
    };

    componentDidMount() {
        // fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=hh8LJpb49GiBE4VMM6TKst92CHnrv9cy")
        fetch("http://localhost:8000/api/landlords")
            //     .then(function (response) {
            //         console.log(response)
            //     })
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
        // console.log("here's the result", res)
        // console.log("this is the state: ", this.state)
    };

    render() {
        const { error, isLoaded, data } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {/* <h4>Evictions Initiated by {localStorage.getItem("plaintiff")}</h4> */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Address</th>
                                <th scope="col">Landlord</th>
                                <th scope="col">Filing Date</th>
                                <th scope="col">Move Out Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(data => (
                                <tr>
                                    <th scope="row">No data
                                {/* {data.address.addressLine1}<br></br> */}
                                        {/* {data.address.addressLine2}<br></br>
                                    {data.address.addressLine3}<br></br> */}
                                        {/* {data.address.city}<br></br>
                                {data.address.state}<br></br>
                                {data.address.zip}*/}
                                    </th>
                                    <td>{data.name}</td>
                                    <td>No data</td>
                                    {/* <td>{data.filingDate}</td> */}
                                    <td>No data</td>
                                    {/* <td>{data.moveoutDate}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}
export default newLandlordResults;
