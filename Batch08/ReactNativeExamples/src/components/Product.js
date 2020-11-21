/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

class CircleButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 48,
          width: 48,
          borderRadius: 24,
          backgroundColor: this.props.backgroundColor,
          borderColor: this.props.borderColor,
          borderWidth: 1,
          borderStyle: 'solid',
          marginHorizontal: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

class ActionButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 24,
          width: 100,
          borderRadius: 24,
          backgroundColor: this.props.backgroundColor,
          marginHorizontal: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{ color: this.props.color, fontWeight: '700', fontSize: 12 }}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class Product extends Component {
  render() {
    return (
      <View
        style={{
          margin: 8,
          height: 200,
          flexDirection: 'row',
        }}>
        <View
          style={{
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
            flex: 2,
            backgroundColor: 'white',
            padding: 12,
          }}>
          <Image
            style={{
              flex: 1,
              borderRadius: 12,
            }}
            source={{
              uri:
                'https://vcdn-sohoa.vnecdn.net/2020/11/09/14102-1604890703-1681-1604890903.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=5bKzjzmF_Eo09PdAlVGpxQ',
            }}
          />
        </View>
        <View
          style={{
            flex: 5,
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            backgroundColor: 'white',
            padding: 12,
          }}>
          <View style={{ height: 20, backgroundColor: 'white' }}>
            <Text style={{ fontWeight: '700' }}>Kids jumpsuit</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#7331C6', fontSize: 32, fontWeight: '700' }}>
              $39.00
            </Text>
            <View style={{ width: 12 }}></View>
            <Text>In stock</Text>
          </View>
          <View
            style={{
              paddingVertical: 12,
              backgroundColor: 'white',
              flexDirection: 'row',
            }}>
            <CircleButton
              backgroundColor="#7331C6"
              borderColor="#7331C6"></CircleButton>
            <CircleButton
              backgroundColor="#ffffff"
              borderColor="#bdc3c7"
              text="M"></CircleButton>
            <CircleButton
              backgroundColor="#ffffff"
              borderColor="#bdc3c7"
              text="L"></CircleButton>
          </View>
          <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
            <ActionButton
              color="white"
              backgroundColor="#7331C6"
              text="Buy now"></ActionButton>
            <ActionButton
              color="#7331C6"
              backgroundColor="#bdc3c7"
              text="Add to cart"></ActionButton>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'flex-end',
            }}>
            <Text>Free shipping on all orders</Text>
          </View>
        </View>
      </View>
    );
  }
}
