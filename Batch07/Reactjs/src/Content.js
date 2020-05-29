import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return <p>{this.props.text}</p>;
  }
}
