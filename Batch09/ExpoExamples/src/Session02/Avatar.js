import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 60,
    height: 120,
    width: 120,
  },
});

class Avatar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ height: this.props.size, width: this.props.size, borderRadius: this.props.size / 2 }} source={{ uri: this.props.imageUrl }} />
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

Avatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.number,
  name: PropTypes.string,
};

Avatar.defaultProps = {
  size: 60,
  name: 'Unknown',
};

export default Avatar;
