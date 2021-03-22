import React, { Component } from 'react';
// Setup
// npm install react-icons --save
import { FaHeart } from 'react-icons/fa';

export default class HeartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      love: true,
    };
  }

  render() {
    let color = this.state.love === true ? 'red' : 'gray';

    return (
      <div>
        <FaHeart
          size={48}
          color={color}
          onClick={() => {
            let l = this.state.love;
            l = !l;
            this.setState({ love: l });
          }}
        />
      </div>
    );
  }
}
