import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Star extends Component {

  constructor(props) {
    super(props);
    var yellowStars = [];
    var grayStars = [];

    for (var i = 1; i <= props.number; i++) {
      yellowStars.push('*');
    }
    for (var j = props.number + 1; j <= 5; j++) {
      grayStars.push('*');
    }

    this.state = {
      yellowStars: yellowStars,
      grayStars: grayStars,
    }
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        {
          this.state.yellowStars.map((item, index) =>
            <Icon key={index} name="star" style={{ color: '#f1c40f', paddingHorizontal: 1 }} size={20} />
          )
        }
        {
          this.state.grayStars.map((item, index) =>
            <Icon key={index} name="star" style={{ color: '#bdc3c7', paddingHorizontal: 1 }} size={20} />
          )
        }
      </View>
    )
  }
}