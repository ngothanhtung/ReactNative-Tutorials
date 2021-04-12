import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import GilroyText from '../../components/GilroyText';
import HeartButton from '../../components/HeartButton';

class Product extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View>
            <GilroyText style={styles.caloriesText}>{this.props.calories} Calories</GilroyText>
          </View>

          <View>
            <HeartButton />
          </View>
        </View>
        <View style={styles.image}></View>
        <GilroyText fontStyle='Medium' style={styles.productName}>
          {this.props.name}
        </GilroyText>
        <GilroyText fontStyle='Regular' style={styles.productDescription}>
          {this.props.description}
        </GilroyText>

        <GilroyText fontStyle='Bold' style={styles.productPrice}>
          $ {this.props.price}
        </GilroyText>
      </View>
    );
  }
}

// Type checking
Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
};

export default Product;

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 220,
    backgroundColor: '#F5F5F8',
    borderRadius: 8,
    padding: 16,
  },
  top: {
    height: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: 'green',
  },

  image: {
    borderRadius: 12,
    marginVertical: 16,
    alignSelf: 'center',
    height: 80,
    width: 80,
    backgroundColor: 'red',
  },
  caloriesText: {
    color: '#111A2C',
    fontSize: 10,
  },
  productName: {
    color: '#111A2C',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
  },

  productDescription: {
    textAlign: 'center',
    fontSize: 10,
  },

  productPrice: {
    color: '#111A2C',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 8,
  },
});
