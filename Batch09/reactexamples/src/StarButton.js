import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
export default class StarButton extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 54, width: 160, borderRadius: 12, backgroundColor: this.props.bgColor }}>
        <span style={{ marginRight: 8, fontWeight: '700', fontSize: 32, color: this.props.color }}> {this.props.number}</span>
        <FaStar size={32} color={this.props.color} />
      </div>
    );
  }
}
