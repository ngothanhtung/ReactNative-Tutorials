/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
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
      <View flex={1}>
        {!this.state.products && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color="green" />
          </View>
        )}
        {this.state.products &&
          this.state.products.map((p, index) => {
            return <Product key={'product-' + index} />;
          })}
      </View>
    );
  }
}
