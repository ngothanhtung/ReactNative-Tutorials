import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Categories from './Categories';
import PopularProducts from './PopularProducts';

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <Categories />
        <PopularProducts />
      </ScrollView>
    );
  }
}
