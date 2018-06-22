import React, { Component } from 'react';
import './ImageBox.css'

class ImageBox extends Component {
    render() {
        return (
            <div key={this.props.id} className="col-md-3 float-left">
                <div className="image-box-div">
                    <img className="banner-image" 
                    src={this.props.image} 
                    alt={this.props.name} 
                    width="100px"
                    height="100px"
                    />
                </div>
            </div>
        )
    }
}

export default ImageBox;