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
      <div>
        <input
          type='checkbox'
          style={{ marginTop: 8 }}
          onChange={() => {
            let c = !this.state.checked;
            this.setState({ checked: c });
            console.log(this.state.checked);
          }}
          checked={this.state.checked}
        ></input>
        {this.state.checked && <h2>Hello Check</h2>}
      </div>
    );
  }
}
