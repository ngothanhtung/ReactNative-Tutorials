/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Image, ActivityIndicator, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

class ToolBar extends Component {
  render() {
    return (
      <View style={{ height: 40, backgroundColor: '#ecf0f1', marginBottom: 4 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: 6,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.onPress('grid');
              // this.setState({ mode: 'grid' });
            }}>
            <Ionicons
              name="ios-grid"
              size={24}
              style={{
                color: this.props.mode === 'grid' ? '#2980b9' : '#bdc3c7',
              }}
            />
          </TouchableOpacity>

          <View style={{ width: 6 }} />

          <TouchableOpacity
            onPress={() => {
              this.props.onPress('list');
            }}>
            <Ionicons
              name="list"
              size={24}
              style={{
                color: this.props.mode === 'list' ? '#2980b9' : '#bdc3c7',
              }}
            />
          </TouchableOpacity>

          <View style={{ width: 6 }} />

          <TouchableOpacity
            onPress={() => {
              this.props.onPress('slide');
            }}>
            <Ionicons
              name="ios-square"
              size={24}
              style={{
                color: this.props.mode === 'slide' ? '#2980b9' : '#bdc3c7',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class GalleryHomework extends Component {
  static navigationOptions = {
    title: 'Picsum Photos',
    headerBackTitle: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: false,
      mode: 'grid',
      selectedImage: null,
    };
  }

  getPhotosAsync = () => {
    this.setState({ loading: true });
    fetch('https://picsum.photos/v2/list')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ photos: json });

        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    this.getPhotosAsync();
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, margin: 2 }}>
        <View
          style={{
            width: '100%',
            height: this.state.mode === 'list' ? height / 3 : height / 6,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                mode: 'view',
                selectedImage: item,
              });
            }}>
            <Image
              resizeMode="cover"
              source={{
                uri: 'https://picsum.photos/400/400/?image=' + item.id,
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* TOOLBAR */}
        <ToolBar mode={this.state.mode} onPress={(mode) => this.setState({ mode: mode })} />

        {/* SLIDE MODE */}
        {!this.state.loading && this.state.mode === 'slide' && (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <FlatList
              style={{ marginLeft: 2, marginRight: 2 }}
              data={this.state.photos}
              renderItem={({ item }) => (
                <Image
                  resizeMode="contain"
                  source={{
                    uri: 'https://picsum.photos/1600/1200/?image=' + item.id,
                  }}
                  style={{ height: '100%', width: width - 4 }}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              pagingEnabled={true}
              horizontal={true}
            />
          </View>
        )}
        {/* LIST | GRID MODE */}
        {!this.state.loading && this.state.mode !== 'slide' && (
          <View>
            <FlatList
              style={{ marginLeft: 2, marginRight: 2 }}
              data={this.state.photos}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={this.state.mode === 'list' ? 1 : 3}
              key={this.state.mode === 'list' ? 1 : 0}
            />
          </View>
        )}

        {/* VIEW MODE */}
        {this.state.mode === 'view' && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              height: height,
              width: width,
              backgroundColor: '#000000',
              justifyContent: 'center',
            }}
            onPress={() => {
              this.setState({ mode: 'grid' });
            }}>
            <View style={{ justifyContent: 'center' }}>
              <Image
                resizeMode="contain"
                source={{
                  uri: 'https://picsum.photos/800/600/?image=' + this.state.selectedImage.id,
                }}
                style={{ height: height / 3, width: '100%' }}
              />

              <Text style={{ color: 'white', alignSelf: 'center', marginTop: 12 }}>{this.state.selectedImage.author}</Text>
            </View>
          </TouchableOpacity>
        )}

        {/* WAITING MODE */}
        {this.state.loading && (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#2d3436" />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
