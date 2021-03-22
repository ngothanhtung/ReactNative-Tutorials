import React, { Component } from 'react';
import Avatar from './Avatar';
import HeartButton from './HeartButton';
import StarButton from './StarButton';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <Avatar imageUrl='https://randomuser.me/api/portraits/men/32.jpg' />
        <Avatar imageUrl='https://randomuser.me/api/portraits/women/44.jpg' />
        <Avatar imageUrl='https://randomuser.me/api/portraits/men/46.jpg' />
        <Avatar imageUrl='https://randomuser.me/api/portraits/men/1.jpg' />

        <HeartButton />
        <StarButton bgColor='#F5F5F8' color='gray' number={4} />
        <StarButton bgColor='#FF6C44' color='white' number={5} />
      </div>
    );
  }
}
