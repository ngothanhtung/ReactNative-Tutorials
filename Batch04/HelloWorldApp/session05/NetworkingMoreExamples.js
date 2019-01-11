import React, { Component } from 'react'
import { Text, View, FlatList, SafeAreaView, RefreshControl } from 'react-native'

export default class NetworkingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingUsers: false,
      loadingPosts: false,
      users: null,
      posts: null,
    }
  }

  componentDidMount() {
    this.getPosts();
    this.getUsers();
  }

  async getUsers() {
    try {
      this.setState({ loadingUsers: true });
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let responseJson = await response.json();
      console.log(responseJson);
      this.setState({ users: responseJson });
      this.setState({ loadingUsers: false });
    } catch (error) {
      console.error(error);
      this.setState({ loadingUsers: false });
    }
  }

  async getPosts() {
    try {
      this.setState({ loadingPosts: true });
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let responseJson = await response.json();
      this.setState({ posts: responseJson });
      this.setState({ loadingPosts: false });
      console.log('DONE: POSTS');
    } catch (error) {
      console.error(error);
      this.setState({ loadingPosts: false });
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
          {
            this.state.users &&
            <View style={{ marginBottom: 24 }}>
              <FlatList
                horizontal={true}
                data={this.state.users}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={{ width: 6 }}></View>}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{ height: 80, width: 80, backgroundColor: '#ecf0f1', borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                      <Text key={index}>{item.username}</Text>
                    </View>
                  )
                }}
              />
            </View>
          }
          {
            this.state.posts &&
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={this.state.loadingPosts}
                  onRefresh={() => this.getPosts()}
                />
              }
              inverted={false}
              data={this.state.posts}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={() => <View style={{ height: 6 }}></View>}
              renderItem={({ item, index }) => {
                return (
                  <View style={{ paddingVertical: 8 }}>
                    <View>
                      <Text style={{ fontWeight: '700' }}>{item.title}</Text>
                    </View>
                    <View>
                      <Text>{item.body}</Text>
                    </View>
                  </View>
                )
              }}
            />
          }
        </View>
      </SafeAreaView>
    )
  }
}
