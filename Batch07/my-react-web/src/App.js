import React, { Component } from 'react';
import Header from './Header';
import Avatar from './Avatar';
import Title from './Title';
import Content from './Content';

import Post from './Post';

import Gallery from './Gallery';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Hello React</h2>
        <p>welcome to Aptech</p>

        <Post title='Ban tin buoi chieu' content='Diem tin buoi sang hang ngay' imageUrl='https://cdn.pixabay.com/photo/2015/12/13/20/43/face-1091702__340.jpg' />
        <hr />
        <Title text='Ban tin nhanh the thao' />
        <Avatar imageUrl='https://cdn.pixabay.com/photo/2016/08/28/13/12/secondlife-1625903__340.jpg' />
        <Content text='Diem tin nhanh the thao' />
        <hr />
        <Title text='Ban tin cuoi ngay' />
        <Avatar imageUrl='https://cdn.pixabay.com/photo/2016/10/07/12/35/man-1721463__340.png' />
        <Content text='Diem tin cuoi ngay' />

        <Gallery />
      </div>
    );
  }
}
