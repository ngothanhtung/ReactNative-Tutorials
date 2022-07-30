import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import React from 'react';

const WIDTH_SCREEN = Dimensions.get('window').width;

const items = [
  {
    id: 1,
    text: 'Thịt tươi',
    color: '#fdcb6e',
  },
  {
    id: 2,
    text: 'Ăn ngon nấu nhanh',
    color: '#e17055',
  },
  {
    id: 3,
    text: 'Giao trong 2 giờ',
    color: '#d63031',
  },
  {
    id: 4,
    text: 'Seal sốc',
    color: '#e84393',
  },
];

type Props = {};

const Promotion = (props: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView pagingEnabled horizontal={true} showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => {
          return (
            <View key={item.id} style={[styles.slide, { backgroundColor: item.color }]}>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Promotion;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: 'red',
  },

  slide: {
    height: 200,
    width: WIDTH_SCREEN * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'SVN-Gilroy-Medium',
  },
});
