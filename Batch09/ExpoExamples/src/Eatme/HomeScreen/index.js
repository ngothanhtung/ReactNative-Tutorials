import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Categories from './Categories';
import PopularProduct from './PopularProduct';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Categories />
        <PopularProduct calories={78} name='Hamburger' description='Chicken patty hamburger' price={15.99} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
