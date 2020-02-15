import React, { Component } from 'react';

class Button extends Component {
    render() {
        return  <button href={this.props.url} className="btnDownload btn btn-success flex-fill flex-1 p-2 flex-1 mr-2" >{this.props.name}</button>
    }
}

export default Button;