import React, { Component } from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';
import Categories from '../../../modules/shopModule/components/Categories';

export default class CategoriesScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Categories />
      </SafeAreaView>
    );
  }
}
