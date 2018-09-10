import React, { Component } from 'react';
import { View, Image, ScrollView, FlatList, Text, ActivityIndicator } from 'react-native';

class Photo extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{ flexDirection: 'row', padding: 12 }}>
          <View style={{ paddingRight: 12 }}>
            <Image style={{ height: 60, width: 60 }} source={{ uri: 'https://picsum.photos/300/300/?random' }} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '700' }}>
              {this.props.item.title}
            </Text>
            {/* <Text>{this.props.item.body}</Text> */}
          </View>
        </View>

        <View style={{ marginTop: 24, height: 1, backgroundColor: 'gray' }}></View>
      </View>
    );
  }
}

export default class PhotoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      photos: null
    };
  }

  componentWillMount() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url)
      .then(response => {
        return response.json();
      }).then((json) => {
        // state
        this.setState({ photos: json });
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.state.loading &&
          <ActivityIndicator />
        }
        {
          (this.state.loading === false) &&
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.photos}
            renderItem={({ item }) => (
              <Photo item={item} />
            )}
          />
          // <ScrollView>
          //   {
          //     this.state.photos.map((item, index) => (
          //       <Photo key={index} item={item} />
          //     ))
          //   }
          // </ScrollView>
        }
      </View>
    );
  }
}
