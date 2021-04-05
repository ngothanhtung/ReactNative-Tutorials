import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const stars = [1, 2, 3, 4, 5];

class Star extends Component {
  render() {
    return (
      <View style={styles.container}>
        {stars.map((s, index) => {
          return <FontAwesome key={index} name='star' style={s <= this.props.number ? styles.icon : styles.lightIcon} />;
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
    color: '#FFA133',
    marginRight: 4,
  },

  lightIcon: {
    color: '#FFA13340',
    marginRight: 4,
  },
});

Star.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Star;
