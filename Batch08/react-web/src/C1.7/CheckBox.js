import React, { Component } from 'react';

export default class SelectInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    };
  }

  render() {
    return (
      <input
        type='checkbox'
        style={{ marginTop: 8 }}
        onChange={() => {
          let c = !this.state.checked;
          this.setState({ checked: c });
        }}
        checked={this.state.checked}
      ></input>
    );
  }
}
