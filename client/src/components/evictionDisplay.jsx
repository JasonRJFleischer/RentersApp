import React, { Component } from 'react';
import data from '../data/data1.json';

class evictionDisplay extends Component {
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
        this.setState({
            data: data
        })
    };

    render() {
        return (
            <div>
                <h4>Evictions in Cleveland</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Plaintiff</th>
                            <th scope="col">Filing Date</th>
                            <th scope="col">Move Out Date</th>
                            {/* <th scope="col">Tax Info</th> */}
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
                                {/* <td><button>Tax Info</button></td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }


}
export default evictionDisplay;