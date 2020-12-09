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
        <Text style={{ color: this.props.color, fontWeight: '700', fontSize: 12 }}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default function Product({ data }) {
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
            borderRadius: 8,
          }}
          source={{
            uri: data.coverImageUrl,
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
          <Text style={{ fontWeight: '700' }}>{data.name}</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ color: '#7331C6', fontSize: 32, fontWeight: '700' }}>${data.price}</Text>
          <View style={{ width: 12 }} />
          <Text>{data.status}</Text>
        </View>
        <View
          style={{
            paddingVertical: 12,
            backgroundColor: 'white',
            flexDirection: 'row',
          }}>
          <CircleButton backgroundColor={data.color} borderColor={data.color} />

          {data.sizes.map((s) => {
            return <CircleButton key={s} backgroundColor="#ffffff" borderColor="#eeeeee" text={s} />;
          })}
        </View>
        <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
          <ActionButton color="white" backgroundColor="#7331C6" text="Buy now" />
          <ActionButton color="#7331C6" backgroundColor="#eeeeee" text="Add to cart" />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'flex-end',
            padding: 4,
          }}>
          {data.freeShip && <Text style={{ fontSize: 11, color: '#757575' }}>Free shipping on all orders</Text>}
        </View>
      </View>
    </View>
  );
}
