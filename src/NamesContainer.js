import React, { Component } from 'react'

export class NamesContainer extends Component {
    render() {
        return (
            <div>
                {this.props.names}
            </div>
        )
    }
}

export default NamesContainer
