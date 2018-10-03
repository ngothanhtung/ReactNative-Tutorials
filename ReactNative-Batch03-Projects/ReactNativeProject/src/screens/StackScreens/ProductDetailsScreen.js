import React, { Component } from 'react';
import { Text, View, Button, Image, AsyncStorage } from 'react-native';
import axios from 'axios';
const url = 'https://slacklivechat.com/jsonplaceholder/product';

export default class ProductDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    }
  }

  componentWillMount() {
    var id = this.props.navigation.state.params.id;
    axios.get(url + '/' + id).then(response => {
      const data = response.data;
      this.setState({ product: data });

    })
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 12 }}>
        {
          this.state.product &&
          <View>
            <Image source={{ uri: this.state.product && this.state.product.imageUrl }} style={{ width: '100%', height: 200, resizeMode: 'cover', }} />
            <Text> {this.state.product && this.state.product.name} </Text>
            <Text> {this.state.product && this.state.product.price} </Text>
            <Button title="Add To Cart" onPress={() => {
              var shoppingCartItems = [];
              AsyncStorage.getItem('shopping-cart').then((data) => {
                if (data) {
                  shoppingCartItems = JSON.parse(data);
                }

                shoppingCartItems.push({
                  product: this.state.product,
                  quantity: 1
                });
                AsyncStorage.setItem('shopping-cart', JSON.stringify(shoppingCartItems));
                alert('Added to cart');
              })
            }} />
            <Button title="Check out" onPress={() => {
              this.props.navigation.navigate('CheckoutScreen');
            }} />
          </View>
        }
      </View>

    )
  }
}