import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Star extends Component {
  renderStar(stars) {
    return stars.split('').map((star, index) => (
      <Icon key={index} style={{ fontSize: 12 }} color="#B33771" name="star" size={20} />
    ));
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {this.renderStar(this.props.stars)}
      </View>
    );
  }
}