import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'

export default class NetworkingAxiosExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null
    }

    axios.get('https://facebook.github.io/react-native/movies.json')
      .then(response => {
        console.log(response.data.movies);
      })
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
