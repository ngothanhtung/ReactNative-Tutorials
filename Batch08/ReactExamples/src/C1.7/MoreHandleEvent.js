import React, { Component } from 'react';

export default class MoreHandleEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    // 3. Bind in constructor()
    this.clickMeType3 = this.clickMeType3.bind(this);
  }

  // 1. Bind direct: onClick={this.clickMeType1.bind(this, 'This is a parameter')}
  clickMeType1(text) {
    this.setState({ text: text });
  }

  // 2. Use Arrow Function in Render, similar to #1: (Quick Code)
  // onClick={() => { this.clickMeType2('This is a parameter') }}
  clickMeType2(text) {
    this.setState({ text: text });
  }

  // 3. Bind in constructor(): this.clickMeType3 = this.clickMeType3.bind(this);
  clickMeType3() {
    this.setState({ text: 'This is a parameter - Type 3' });
  }

  // 4. Nên dùng: Use Arrow Function in Class Property (Without Parameters)
  clickMeType4 = () => {
    this.setState({ text: 'This is a parameter - Type 4' });
  };

  // 5. Nên dùng: Use Arrow Function in Class Property (Within Parameters)
  clickMeType5 = (text) => () => {
    this.setState({ text: text });
    console.log(text);
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>{this.state.text}</h1>

        {/* --------------------------------------------------------------- */}
        {/* 1. Dynamic binding in render() */}
        <button onClick={this.clickMeType1.bind(this, 'This is a parameter - Type 1')}>Click me 1</button>

        {/* 2. Use Arrow Function in Render, similar to #1: (Quick Code) */}
        <button
          onClick={() => {
            this.clickMeType2('This is a parameter - Type 2');
          }}
        >
          Click me 2
        </button>

        {/* 3 Bind in constructor() Nên dùng: nhưng rườm rà */}
        <button onClick={this.clickMeType3}>Click me 3</button>

        {/* 4. Use Arrow Function in Class Property (Without Parameters): Nên dùng */}
        <button onClick={this.clickMeType4}>Click me 4</button>

        {/* 5. Use Arrow Function in Class Property (Within Parameters): Nên dùng  */}
        <button onClick={this.clickMeType5('This is a parameter')}>Click me 5</button>

        {/* 6. Use Arrow Function */}
        <button
          onClick={() => {
            console.log('Click me (Hay gặp ở các ví dụ)');
          }}
        >
          Click me 6 (Quick Code)
        </button>
      </div>
    );
  }
}
