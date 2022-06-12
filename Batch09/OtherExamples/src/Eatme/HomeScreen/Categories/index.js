import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Category from './Category';

import categories from './data';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  renderItem = ({ item, index }) => {
    return (
      <Category
        onPress={() => {
          this.setState({ selectedIndex: index });
        }}
        selected={this.state.selectedIndex === index}
        name={item.name}
        image={item.image}
      />
    );
  };

  render() {
    return (
      <View style={{ marginTop: 24, marginLeft: 24 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            return 'category-' + item.id;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    minWidth: 128,
    borderRadius: 10,
    backgroundColor: '#F5F5F8',
    marginRight: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 8,
  },

  selectedButton: {
    height: 48,
    minWidth: 128,
    borderRadius: 10,
    backgroundColor: '#FF6C44',
    marginRight: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 8,
  },

  image: {
    height: 34,
    width: 34,
    marginRight: 8,
    marginTop: 5,
  },

  selectedText: {
    color: 'white',
    fontWeight: '700',
  },

  text: {
    color: '#525C67',
    fontWeight: '700',
  },
});
