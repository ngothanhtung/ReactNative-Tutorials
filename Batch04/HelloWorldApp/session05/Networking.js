import React, { Component } from 'react'
import { Text, View, ActivityIndicator, FlatList, SafeAreaView } from 'react-native'

export default class NetworkingComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: null,
    }

    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log('WILL DONE');
        //console.log('NETWORKING JSON', responseJson);
        this.setState({
          movies: responseJson.movies
        });
        console.log(this.state.movies);
        this.setState({ loading: false });
        // return responseJson.movies;
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.error(error);
      });

    console.log('DONE')
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
          {/* {
          this.state.loading && <ActivityIndicator size="large" />
        }
        {
          (this.state.loading === false) && this.state.movies.map((item, index) => {
            return (
              <View key={index}>
                <Text>{item.title}</Text>
              </View>
            )
          })
        } */}
          {

            <FlatList
              data={this.state.movies}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return (
                  <Text key={index}>{item.title}</Text>
                )
              }}
            />
          }
        </View>
      </SafeAreaView>
    )
  }
}
