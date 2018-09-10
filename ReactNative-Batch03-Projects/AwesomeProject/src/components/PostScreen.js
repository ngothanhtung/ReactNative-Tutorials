import React, { Component } from 'react';
import { View, Image, ScrollView, Text, ActivityIndicator } from 'react-native';

class Post extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{ flexDirection: 'row', padding: 12 }}>
          <View style={{ paddingRight: 12 }}>
            <Image style={{ height: 60, width: 60 }} source={{ uri: 'https://images.unsplash.com/photo-1516648860098-3849fd247267?w=400&q=60' }} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: '700' }}>
              {this.props.item.title}
            </Text>
            <Text>{this.props.item.body}</Text>
          </View>
        </View>

        <View style={{ marginTop: 24, height: 1, backgroundColor: 'gray' }}></View>
      </View>
    );
  }
}

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: null
    };
  }

  componentWillMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then(response => {
        return response.json();
      }).then((json) => {
        // state
        this.setState({ posts: json });
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
          <ScrollView>
            {
              this.state.posts.map((item, index) => (
                <Post key={index} item={item} />
              ))
            }
          </ScrollView>
        }
      </View>
    );
  }
}
