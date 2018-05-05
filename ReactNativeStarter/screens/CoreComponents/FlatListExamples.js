import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const people = [
  { key: 'Devin' },
  { key: 'Jackson' },
  { key: 'James' },
  { key: 'Joel' },
  { key: 'John' },
  { key: 'Jillian' },
  { key: 'Jimmy' },
  { key: 'Julie' },
];

export default class FlatListExamples extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }

    this.getMoviesFromApiAsync();
  }

  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.movies);
        this.setState({ movies: responseJson.movies });
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }


  renderOneItem(item) {
    return (
      <View style={{ height: 40, backgroundColor: 'yellow', }}>
        <Text style={styles.item}>{item.title} ({item.releaseYear})</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.movies}
          renderItem={({ item }) => { return this.renderOneItem(item); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
