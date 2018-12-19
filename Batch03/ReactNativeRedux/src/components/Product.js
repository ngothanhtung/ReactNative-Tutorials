import React, { Component } from 'react'
import { connect } from 'react-redux';
import { calculateTotal } from '../actions';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import ResetButton from './ResetButton';
const styles = StyleSheet.create({
  textInput: {
    height: 48,
  }
});

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      quantity: 0,
      discount: 0
    }
  }
  render() {
    return (
      <View>
        <Text>Price:</Text>
        <TextInput style={styles.textInput} placeholder="Price"
          onChangeText={(text) => {
            this.setState({ price: text });
          }}
        />

        <Text>Quantity:</Text>
        <TextInput style={styles.textInput} placeholder="Quantity"
          onChangeText={(text) => {
            this.setState({ quantity: text });
          }}
        />
        <Text>Discount (%):</Text>
        <TextInput style={styles.textInput} placeholder="Discount (%)"
          onChangeText={(text) => {
            this.setState({ discount: text });
          }}
        />

        <Button title="Save" onPress={() => {
          this.props.calculateTotal(this.state.price, this.state.quantity, this.state.discount)
        }} />
        <View style={{ height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
          <Text>
            {this.props.total}
          </Text>
        </View>
        <ResetButton />
      </View>
    )
  }
}


// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  total: state.calculatorReducer.total
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  calculateTotal: (price, quantity, discount) => dispatch(calculateTotal(price, quantity, discount))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

