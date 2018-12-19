import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
const { width, height } = Dimensions.get('window');

export default class PhotoScreen extends Component {
  static navigationOptions = {
    title: 'Photos',
    headerBackTitle: null
  }

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      done: false,
      albumId: this.props.navigation.state.params.albumId,
    };

    this.getPhotosAsync();
  }

  getPhotosAsync = () => {
    axios.get('http://localhost:9000/gallery/photos/' + this.state.albumId)
      .then((response) => {
        this.setState({ photos: response.data.result });
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
          <View style={{ width: '100%', height: height / 2 }}>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('PhotoScreen', { albumId: item.id });
            }}>
              <Image resizeMode="cover" source={{ uri: item.imageUrl }} style={{ height: '100%', width: '100%' }} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }} >
            <View style={{ padding: 6 }}>
              <Text style={styles.item}>{item.title}</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#ffffff', height: 24 }} />
      </View>
    );
  }

  componentWillUnmount() {
    this.setState({ albums: [] });
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});