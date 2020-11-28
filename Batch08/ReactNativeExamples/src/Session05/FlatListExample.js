/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import data from './data';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class FlatListExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: data,
    };
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ width: 120, height: 120 }}>
            <Image
              source={{ uri: item.thumbnailUrl }}
              style={{ height: 120, width: 120 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ padding: 6 }}>
              <Text style={styles.item}>{item.title}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.photos}
          renderItem={this.renderItem}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
        />
      </View>
    );
  }
}
