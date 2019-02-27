import { connect } from 'react-redux';
import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { withdraw, deposite } from '../actions'

class ATM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money: '0'
    }
  }
  render() {
    return (
      <View>
        <TextInput onChangeText={(text) => {
          this.setState({ money: text })
        }} />
        <Button title="Withdraw" onPress={() => {
          this.props.withdraw(this.state.money);
        }} />
        <Button title="Deposite" onPress={() => {
          this.props.deposite(this.state.money)
        }} />
        <Text>{this.props.balance}</Text>
      </View>
    )
  }
}


// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  balance: state.atmReducer.balance
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  withdraw: (money) => dispatch(withdraw(money)),
  deposite: (money) => dispatch(deposite(money)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ATM);


