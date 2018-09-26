import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
const url = 'https://slacklivechat.com/jsonplaceholder/product';

export default class ProductDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    }
  }

  componentWillMount() {
    var id = this.props.navigation.state.params.id;
    axios.get(url + '/' + id).then(response => {
      const data = response.data;
      this.setState({ product: data });
      console.log(data);
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