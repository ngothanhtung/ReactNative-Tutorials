import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';

export default class FetchExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      name: '',
      price: ''
    }
    this.getProducts();
  }

  getProducts() {
    fetch('http://localhost:9000/onlineshop/products')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({ products: responseJson });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  addProduct() {
    fetch('http://localhost:9000/onlineshop/products/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        price: this.state.price,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
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
      <View style={{ flex: 1, marginTop: 24 }}>
        <View style={{ flex: 1, backgroundColor: 'green', padding: 12 }}>
          <TextInput style={{ height: 48, backgroundColor: 'white', padding: 6 }}
            placeholder="Name"
            onChangeText={(text) => { this.setState({ name: text }) }}
          />
          <View style={{ height: 6 }}></View>
          <TextInput style={{ height: 48, backgroundColor: 'white', padding: 6 }}
            placeholder="Price"
            onChangeText={(text) => { this.setState({ price: text }) }}
          />

          <View style={{ height: 6 }}></View>
          <TouchableOpacity
            style={{ height: 48, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => {
              // POST DATA TO API
              this.addProduct();
            }}
          >
            <Text style={{ color: 'white' }}>Save</Text>
          </TouchableOpacity>


          <Text>{this.state.name}</Text>
          <Text>{this.state.price}</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'yellow' }}>
          <FlatList
            data={this.state.products}
            renderItem={(item) => (this.renderItem(item))}
          />
        </View>

      </View>
    );
  }
}
