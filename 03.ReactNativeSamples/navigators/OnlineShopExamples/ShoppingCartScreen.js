import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');

export default class ShoppingCartScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: []
    }

    this.getCarts();
  }

  getCarts() {
    let carts = [];
    AsyncStorage.getItem('Carts', (error, result) => {
      console.log(result);
      if (result) {
        carts = JSON.parse(result);
        this.setState({ cartItems: carts });
      }
    });
  }

  componentDidUpdate(nextProps) {
    this.getCarts();
  }

  renderItem({ item }) {
    return (
      <View style={{ flex: 1, margin: 2, flexDirection: 'row' }}>
        <View style={{ width: 32, height: 32 }}>
          <TouchableOpacity onPress={() => {

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
        <View style={{ padding: 30, alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>
            Shopping Cart Items
          </Text>
        </View>
        <FlatList
          data={this.state.cartItems}
          renderItem={(item) => (this.renderItem(item))}
          keyExtractor={(item, index) => (index.toString())}
        />
        <View style={{ height: 48 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ flex: 1, height: 48, backgroundColor: '#d63031', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => {
                AsyncStorage.removeItem('Carts', (error) => {
                  this.setState({ cartItems: [] });
                });
              }}
            >
              <Text style={{ color: '#ffffff' }}>Clear</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flex: 1, height: 48, backgroundColor: '#0984e3', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => {
                this.props.navigation.navigate('ProductsScreen');
              }}
            >
              <Text style={{ color: '#ffffff' }}>Continue shopping</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}
