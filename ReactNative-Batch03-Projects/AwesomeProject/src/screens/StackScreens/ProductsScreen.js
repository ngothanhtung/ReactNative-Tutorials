import React, { Component } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

const url = 'https://slacklivechat.com/jsonplaceholder/products';

class Product extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => {
        const id = this.props.product.id;
        this.props.navigation.navigate('ProductDetailsScreen', { id: id })
        // alert(this.props.product.id);
      }}>
        <View style={{ padding: 4 }}>
          <Image source={{ uri: this.props.product.imageUrl }} style={{ height: 120, width: 120 }} />
          <Text>
            {this.props.product.name}
          </Text>
        </View>
      </TouchableOpacity>

    );
  }
}

export default class ProductsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null
    }
  }

  componentWillMount() {
    axios.get(url).then(response => {
      const data = response.data;
      this.setState({ products: data });
      console.log(data);
    })
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.products}
          renderItem={({ item }) =>
            <Product navigation={this.props.navigation} product={item} />
          }
        />
      </View>
    )
  }
}