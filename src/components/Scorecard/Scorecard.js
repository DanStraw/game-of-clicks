import React from 'react';
import './Scorecard.css';

class Scorecard extends React.Component {
    render() {
        return (
            <div className="col-md-4">
                <p className="score">Current Score: {this.props.currentScore}</p>
                {/* <br /> */}
                <p className="score">High Score: {this.props.highScore}</p>
            </div>
        )
    }
}

export default Scorecard;