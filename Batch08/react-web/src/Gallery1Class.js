import React, { Component } from 'react';

const count = 3;

export default class Gallery1Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
    };
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div>
          <img alt='' style={{ width: 600 }} src={'/images/' + this.state.index + '.jpg'} />
        </div>

        <div>
          <button
            disabled={this.state.index === 1}
            onClick={() => {
              let newIndex = this.state.index - 1;
              this.setState({ index: newIndex });
            }}
          >
            Previous
          </button>
          <span style={{ margin: 8 }}>
            {this.state.index} / {count}
          </span>
          <button
            disabled={this.state.index === count}
            onClick={() => {
              let newIndex = this.state.index + 1;
              this.setState({ index: newIndex });
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  changeImage() {
    // console.log('tick: ' + new Date());

    let newIndex = this.state.index + 1;
    if (newIndex > 3) newIndex = 1;
    this.setState({ index: newIndex });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.changeImage(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}
