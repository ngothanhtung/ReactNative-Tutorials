import React, { Component } from 'react';
import { Platform, Alert, View, Text, Image, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 22 : null,
  },
});

export default class FlatListExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      done: false,
    };

    this.getPhotosAsync();
  }

  getPhotosAsync = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        this.setState({ photos: response.data });
        this.setState({ done: true });
      })
      .catch((error) => {
        Alert.alert('Error', error);
      });
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ width: 120, height: 120 }}>
            <Image source={{ uri: item.url.replace('http', 'https') }} style={{ height: 120, width: 120 }} />
          </View>
          <View style={{ flex: 1 }} >
            <View style={{ padding: 6 }}>
              <Text style={styles.item}>{item.title}</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#b2bec3', height: 1 }} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.done ?
            <FlatList
              data={this.state.photos}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
            :
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#2d3436" />
            </View>
        }
      </View>
    );
  }
}

