import React, { Component } from 'react';
import { Dimensions, Platform, Alert, View, Text, Image, FlatList, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import data from './data';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class AlbumScreen extends Component {
  static navigationOptions = {
    title: 'Albums',
    // header: null,
    headerBackTitle: null, // iOS
  };

  constructor(props) {
    super(props);
    this.state = {
      albums: data.albums,
    };
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ padding: 12 }}>
            <View style={{ width: 100, height: 100, backgroundColor: 'green' }}>
              <TouchableHighlight onPress={() => {
                this.props.navigation.navigate('PhotoScreen', { album: item });
              }}>
                <Image resizeMode="cover" source={{ uri: item.coverUrl }} style={{ height: '100%', width: '100%' }} />
              </TouchableHighlight>
            </View>
          </View>

          <View style={{ flex: 1 }} >
            <View style={{ paddingTop: 12, paddingRight: 12 }}>
              <Text style={{ fontWeight: '700', fontSize: 15 }}>{item.title}</Text>
              <View style={{ height: 12 }} />
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Ionicons name={'ios-calendar-outline'} size={20} style={{ color: '#000000' }} />
                <View style={{ width: 6 }} />
                <Text style={{ fontWeight: '300' }}>{item.date && item.date.toDateString()}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: '#ecf0f1' }} />
      </View >
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.albums}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

