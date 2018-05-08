import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class PhotoScreen extends Component {
  static navigationOptions = {
    title: 'Photos',
    headerBackTitle: null
  }

  constructor(props) {
    super(props);
    this.state = {
      album: this.props.navigation.getParam("album", []),
    };
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ width: '100%', height: height / 2.5 }}>
            <TouchableOpacity>
              <Image resizeMode="cover" source={{ uri: item }} style={{ height: '100%', width: '100%' }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: '#ffffff', height: 24 }} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.album.photos}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
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