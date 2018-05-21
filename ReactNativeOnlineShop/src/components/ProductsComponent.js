import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

export default class ProductsComponent extends Component {
  constructor(props) {
    super(props);
    this.props.getProducts();
  }

  componentDidMount() {

  }

  renderItem({ item }) {
    return (
      <View>
        <Text>
          {item.name}
        </Text>
      </View>
    );
  }
  render() {
    return (
      <View style={{ marginTop: 24 }}>
        {
          this.props.loading && <ActivityIndicator />
        }
        {
          (this.props.loading === false) &&
          <FlatList
            data={this.props.products}
            renderItem={(item) => (this.renderItem(item))}
            keyExtractor={(item, index) => (index.toString())}
          />
        }

      </View>
    );
  }
}
