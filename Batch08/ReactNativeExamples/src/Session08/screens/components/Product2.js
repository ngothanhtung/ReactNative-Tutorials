/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ActionButton = () => {
  return (
    <TouchableOpacity
      style={{
        height: 48,
        width: 48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0984e3',
        borderRadius: 6,
      }}>
      <Icon name="shopping-cart" color="white" size={16} />
    </TouchableOpacity>
  );
};
export default function Product({ data }) {
  return (
    <View
      style={{
        flex: 1,
        margin: 8,
      }}>
      <Image
        style={{
          height: 160,
          width: '100%',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
        resizeMode="cover"
        source={{
          uri: data.coverImageUrl,
        }}
      />
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
          backgroundColor: 'white',
        }}>
        <Text style={{ fontWeight: '700' }}>{data.name}</Text>
        <View height={4} />
        <Text style={{ fontWeight: '400', color: 'grey' }}>{data.categoryName}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}>
        <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 24 }}>
          <Text style={{ fontWeight: '700', color: 'black' }}>{data.price} $</Text>
        </View>
        <View
          style={{
            paddingRight: 12,
            paddingVertical: 12,
          }}>
          <ActionButton />
        </View>
      </View>
    </View>
  );
}
