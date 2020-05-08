import React, { Component } from 'react';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      number: 1,
    };
  }

  render() {
    return (
      <div>
        <img src={'images/' + this.state.number + '.jpg'} style={{ width: 500 }} />
        <p>
          <button
            onClick={() => {
              //
              // this.state.number = this.state.number + 1;
              const newNumber = this.state.number - 1;
              this.setState({ number: newNumber });
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              const newNumber = this.state.number + 1;
              this.setState({ number: newNumber });
            }}
          >
            Next
          </button>
        </p>
      </div>
    );
  }
}
