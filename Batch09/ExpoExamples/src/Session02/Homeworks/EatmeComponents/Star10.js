import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class Star10 extends Component {
  render() {
    return (
      <View style={styles.container}>
        {stars.map((s, index) => {
          return <FontAwesome size={16} key={index} name='star-half' style={[s <= this.props.number * 2 ? styles.icon : styles.lightIcon, { transform: [{ scaleX: s % 2 === 0 ? -1 : 1 }] }]} />;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    marginLeft: -2,
    color: '#FFA133',
  },

  lightIcon: {
    marginLeft: -2,
    color: '#FFA13340',
  },
});

Star10.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Star10;
