import React, { Component } from 'react';

class CoordinatesButton extends Component {
    render() {
        return (
            <button onClick={this.handleClick}>Button</button>
        )
    }

    handleClick = (e) => {
        e.persist()
        let coords = []
        coords.push(e.clientX)
        coords.push(e.clientY)
        
        this.props.onReceiveCoordinates(coords)
    }
}

export default CoordinatesButton