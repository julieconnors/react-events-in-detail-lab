import React, { Component } from 'react';

class DelayedButton extends Component {
    render() {
        return (
            <button onClick={this.handleDelayedButton}>Delay</button>
        )
    }

    handleDelayedButton = (e) => {
        e.persist()
        window.setTimeout((this.props.onDelayedClick(e)), this.props.delay)
    }
}

export default DelayedButton;