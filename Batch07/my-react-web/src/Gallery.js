import React, { Component } from 'react';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      number: 1,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.number >= 3) {
        this.setState({ number: 1 });
      } else {
        const newNumber = this.state.number + 1;
        this.setState({ number: newNumber });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <img alt='' src={'images/' + this.state.number + '.jpg'} style={{ width: 500 }} />
        <p>
          <button
            disabled={this.state.number === 1 ? 'disable' : ''}
            onClick={() => {
              //
              // this.state.number = this.state.number + 1;
              const newNumber = this.state.number - 1;
              this.setState({ number: newNumber });
            }}
          >
            Back
          </button>
          <span>{this.state.number} / 3</span>
          <button
            disabled={this.state.number === 3 ? 'disable' : ''}
            onClick={() => {
              const newNumber = this.state.number + 1;
              this.setState({ number: newNumber });
            }}
          >
            Next
          </button>
        </p>
        <div>
          <img
            alt=''
            src='/images/1.jpg'
            style={{ height: 60, opacity: this.state.number === 1 ? 1 : 0.5 }}
            onClick={() => {
              this.setState({ number: 1 });
            }}
          />
          <img
            alt=''
            src='/images/2.jpg'
            style={{ height: 60, opacity: this.state.number === 2 ? 1 : 0.5 }}
            onClick={() => {
              this.setState({ number: 2 });
            }}
          />
          <img
            alt=''
            src='/images/3.jpg'
            style={{ height: 60, opacity: this.state.number === 3 ? 1 : 0.5 }}
            onClick={() => {
              this.setState({ number: 3 });
            }}
          />
        </div>
      </div>
    );
  }
}
