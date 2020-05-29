import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    return (
      <div>
        <span style={{ color: 'blue', fontSize: 14 }}>{this.props.text}</span>
      </div>
    );
  }
}
