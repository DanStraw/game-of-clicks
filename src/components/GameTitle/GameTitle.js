import React from 'react';
import './GameTitle.css';

class GameTitle extends React.Component {
    render() {
        return (
            <div id="title" className="col-md-5">
                <h1> GAME OF CLICKS</h1>
                <h5>In the Game of Clicks, You Click or You Die!</h5>
            </div>
        )
    }
}

export default GameTitle;