import React from 'react';
import './Directions.css'

class Directions extends React.Component {
    render() {
        return (
            <div id={this.props.id} className="col-md-3">
                {this.props.message}
            </div>
        )
    }
}

export default Directions;