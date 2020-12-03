import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Product from './Product';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ products: [1, 2, 3, 4] });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <SafeAreaView flex={1}>
        <FlatList
          data={this.state.products}
          showsVerticalScrollIndicator={false}
          renderItem={({}) => {
            return <Product />;
          }}
          keyExtractor={(item, index) => 'product-' + index}
        />
      </SafeAreaView>
    );
  }
}
