import React, { Component } from 'react';

export default class Avatar extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imageUrl} style={{ height: 64, width: 64, borderRadius: 32 }} />
      </div>
    );
  }
}
