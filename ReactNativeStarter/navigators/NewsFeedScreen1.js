import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
// axios
import axios from 'axios';
// CONSTANTS
import SETTINGS from '../constants/SETTINGS';
// STYLES
import styles from './styles';

export default class NewsFeedScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    // AXIOS: EMAIL EXISTS?              
    axios.get(SETTINGS.ExpressApiUrl + '/product/')
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        alert('Error: ' + error);
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text> News Feed 1 </Text>
          <Button onPress={() => {
            this.props.navigation.navigate('NewsFeed2');
          }}
            title="Go to NewsFeedScreen2" />
        </View>
      </View>
    );
  }
}
