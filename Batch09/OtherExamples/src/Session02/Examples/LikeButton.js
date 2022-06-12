import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { AntDesign as ADIcon } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    fontSize: 24,
    color: 'blue',
  },
  text: {
    marginLeft: 4,
    fontSize: 18,
  },
});

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    // định nghĩa các biến trong state
    this.state = {
      isLike: false,
    };
  }

  render() {
    let iconName = 'like2';
    if (this.state.isLike) {
      iconName = 'like1';
    }

    return (
      <View style={styles.container}>
        <ADIcon
          name={iconName}
          style={styles.icon}
          onPress={() => {
            // thay đổi giá trị của state.isLike
            let x = !this.state.isLike;
            this.setState({ isLike: x });
          }}
        />
        <Text style={styles.text}>Like</Text>
      </View>
    );
  }
}
