import React, { Component } from 'react';
import data from '../data/data1.json';

class landlordResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address1: "",
            address2: "",
            address3: "",
            city: "",
            State: "",
            zip: "",
            plaintiff: "",
            filingDate: "",
            moveOutDate: "",
            data: []
        }
    };

    componentDidMount() {
        console.log("component did mount");
        let landlord = localStorage.getItem("plaintiff").toUpperCase();
        let newData = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].plaintiff.includes(landlord)) {
                newData.push(data[i])
            }
        }
        if (newData.length === 0) {
            alert("No records found.");
            window.location.replace('/')
            return
        }
        this.setState({
            data: newData
        })
    };

    render() {
        return (
            <div>
                <h4>Evictions Initiated by {localStorage.getItem("plaintiff")}</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Plaintiff</th>
                            <th scope="col">Filing Date</th>
                            <th scope="col">Move Out Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(data => (
                            <tr>
                                <th scope="row">
                                    {data.address.addressLine1}<br></br>
                                    {/* {data.address.addressLine2}<br></br>
                                    {data.address.addressLine3}<br></br> */}
                                    {data.address.city}<br></br>
                                    {data.address.state}<br></br>
                                    {data.address.zip}</th>
                                <td>{data.plaintiff}</td>
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
export default landlordResults;
