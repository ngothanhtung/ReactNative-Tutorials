import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList, Image } from 'react-native'

export default class ScrollViewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null
    }
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ posts: json })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View>
        <ScrollView>
          {
            this.state.posts && this.state.posts.map((item, index) => (
              <View key={index} style={{ borderBottomWidth: 1, borderBottomColor: 'red', height: 100, backgroundColor: 'yellow' }}>
                <Image source={{ uri: item.thumbnailUrl }} style={{ height: 100, width: 100 }} />
                <Text>
                  {item.title}
                </Text>
              </View>
            ))
          }
        </ScrollView>
      </View>

    )
  }
}
