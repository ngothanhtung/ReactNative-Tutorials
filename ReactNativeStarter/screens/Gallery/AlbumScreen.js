import React, { Component } from 'react';
import { Dimensions, Platform, Alert, View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class AlbumScreen extends Component {
  static navigationOptions = {
    title: 'Albums',
    headerTitleStyle: { alignSelf: 'center' },
    headerRight: (<View />),
    headerBackTitle: null, // iOS
  };

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      done: false,
    };

    this.getAlbumsAsync();
  }

  getAlbumsAsync = () => {
    axios.get('http://localhost:9000/gallery/albums')
      .then((response) => {
        this.setState({ albums: response.data.result });
        this.setState({ done: true });
      })
      .catch((error) => {
        Alert.alert('Error', error);
      });
  }

  componentWillUnmount() {
    this.setState({ albums: [] });
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ padding: 12 }}>
            <View style={{ width: 120, height: 120, backgroundColor: 'green' }}>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('PhotoScreen', { albumId: item._id });
              }}>
                <Image resizeMode="cover" source={{ uri: item.coverUrl }} style={{ height: '100%', width: '100%' }} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 1 }} >
            <View style={{ padding: 12 }}>
              <Text style={{ fontWeight: '700' }}>{item.title}</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#ffffff', height: 24 }} />
      </View >
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.done ?
            <FlatList
              data={this.state.albums}
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

