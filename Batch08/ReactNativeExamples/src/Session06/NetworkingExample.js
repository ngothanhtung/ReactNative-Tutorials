/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import { Text, View, FlatList, Image, ActivityIndicator } from 'react-native';

const url = 'https://jsonplaceholder.typicode.com/photos';

export default class NetworkingExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      photos: [],
    };
  }

  componentDidMount() {
    console.log('Start: get data');

    this.setState({ loading: true });

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log('Completed: get data');
        this.setState({ photos: json, loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log('ERROR:', error);
      });

    console.log('End: get data');
  }

  renderItem = ({ item }) => {
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
              <Text style={{ fontSize: 15 }}>{item.title}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.loading && (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
          </View>
        )}
        {!this.state.loading && (
          <FlatList
            data={this.state.photos}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => {
              return item.id.toString();
            }}
          />
        )}
      </View>
    );
  }
}
