import React, { Component } from 'react';
import Avatar from './Avatar';
import Title from './Title';
import Content from './Content';

export default class Post extends Component {
  render() {
    return (
      <div>
        <Title text={this.props.title} />
        <Avatar imageUrl={this.props.imageUrl} />
        <Content text={this.props.content} />
      </div>
    );
  }
}
