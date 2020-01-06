import React, { Component } from 'react';

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

    render() {
        return (
            <div>
                <h4>Eviction</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Address 1</th>
                            <th scope="col">Address 2</th>
                            <th scope="col">Address 3</th>
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col">Zip</th>
                            <th scope="col">Landlord</th>
                            <th scope="col">Filing Date</th>
                            <th scope="col">Move Out Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(data => (
                            <tr>
                                <th scope="row">{data.address1}</th>
                                <td>{data.address2}</td>
                                <td>{data.address3}</td>
                                <td>{data.city}</td>
                                <td>{data.state}</td>
                                <td>{data.zip}</td>
                                <td>{data.plaintiff}</td>
                                <td>{data.filingDate}</td>
                                <td>{data.moveOutDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }


}
export default evictionDisplay;