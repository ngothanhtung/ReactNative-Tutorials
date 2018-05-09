import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
const { width, height } = Dimensions.get('window');

export default class PicsumScreen extends Component {
  static navigationOptions = {
    title: 'Picsum Photos',
    headerBackTitle: null
  }

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      done: false,
      mode: 'grid'
    };

    this.getPhotosAsync();
  }

  getPhotosAsync = () => {
    axios.get('https://picsum.photos/list')
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
      <View style={{ flex: 1, margin: 2 }}>
        <View style={{ width: '100%', height: this.state.mode === 'list' ? height / 2 : height / 4 }}>
          <Image resizeMode="cover" source={{ uri: 'https://picsum.photos/300/300/?image=' + item.id }} style={{ height: '100%', width: '100%' }} />
        </View>
      </View>
    );
  }

  componentWillUnmount() {
    this.setState({ albums: [] });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 40, backgroundColor: '#ecf0f1', marginBottom: 6 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 6 }}>
            <TouchableOpacity onPress={() => { this.setState({ mode: 'grid' }) }}>
              <Ionicons name={this.state.mode === 'grid' ? 'ios-grid' : 'ios-grid-outline'} size={24} style={{ color: '#2d3436' }} />
            </TouchableOpacity>
            
            <View style={{width: 6}} />
            
            <TouchableOpacity onPress={() => { this.setState({ mode: 'list' }) }}>
              <Ionicons name={this.state.mode === 'list' ? 'ios-list-box' : 'ios-list-box-outline'} size={24} style={{ color: '#2d3436' }} />
            </TouchableOpacity>
          </View>
        </View>
        {
          this.state.done ?
            <FlatList style={{ marginLeft: 2, marginRight: 2 }}
              data={this.state.photos}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={this.state.mode === 'list' ? 1 : 2}
              key={this.state.mode === 'list' ? 1 : 0}
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