import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');

export default class ProductsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }

    const category = this.props.navigation.state.params.category;
    const id = category._id;

    fetch(`http://localhost:9000/onlineshop/categories/${id}/products`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ products: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderItem({ item }) {
    return (
      <View style={{ flex: 1, margin: 2, flexDirection: 'row' }}>
        <View style={{ width: 160, height: height / 6 }}>
          <TouchableOpacity onPress={() => {
            // NAVIGATE TO OTHER SCREEn WITH PARAMETERS
            this.props.navigation.navigate('ProductDetailsScreen', { product: item });
          }}>
            <Image resizeMode="cover" source={{ uri: 'https://picsum.photos/600/600' }} style={{ height: '100%', width: '100%' }} />
          </TouchableOpacity>

        </View>
        <View>
          <View style={{ padding: 12 }}>
            <Text>{item.name}</Text>
          </View>

        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.products}
          renderItem={(item) => (this.renderItem(item))}
          keyExtractor={(item, index) => (index.toString())}
        />
      </View>
    );
  }
}
