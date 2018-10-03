import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import VioletButton from '../components/shared/VioletButton';

const products = [
  {
    id: 1,
    name: 'iPhone X',
    price: 1000
  }, {
    id: 2,
    name: 'iPhone XS',
    price: 1500
  }
]


class Product extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', height: 24, marginBottom: 6 }}>
        <View style={{ width: 24, height: 24, backgroundColor: 'blue' }}>
        </View>
        <View style={{ flex: 1, paddingLeft: 12 }}>
          <Text>
            {this.props.name}
          </Text>
        </View>
        <View style={{ width: 12 }}></View>
        <View>
          <Text>
            Price: {this.props.price}
          </Text>
        </View>
        <View>
          <VioletButton KichChuot={() => {
            this.props.Buy();
          }} title="Buy" />
        </View>
        <View>
          <VioletButton KichChuot={() => {
            this.props.Like();
          }} title="Like" />
        </View>
      </View>
    )
  }
}

export default class MultiLevelHandling extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {
          products.map((item, index) => (
            <Product Buy={() => {
              alert('Mua hang ' + item.name);
            }}
              key={index} name={item.name} price={item.price}
              Like={() => {
                alert('Yeu thich ' + item.name);
              }}
            />
          ))
        }
      </View>
    )
  }
}
