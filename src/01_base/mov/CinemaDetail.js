import React, {Component} from 'react';

class CinemaDetail extends Component {
    render() {
        return (
            <div>
                <h1>Cinema Detail</h1>
                <h2>Address</h2>
                {this.props.data.address}

                <h2>行政区域</h2>
                {this.props.data.districtName}
            </div>
        );
    }
}

export default CinemaDetail;
