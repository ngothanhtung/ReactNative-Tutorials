import React, { Component } from 'react';
import { FaHeart } from 'react-icons/fa';
export default class HeartButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  render() {
    return (
      <div>
        <FaHeart
          onClick={() => {
            let s = this.state.status;
            this.setState({ status: !s });
          }}
          color={this.state.status === true ? 'red' : '#BDBDBD'}
        />
      </div>
    );
  }
}
