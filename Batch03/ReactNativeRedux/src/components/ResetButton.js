import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { resetTotal } from '../actions';

class ResetButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{ height: 48, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}
        onPress={() => {
          this.props.resetTotal();
        }}>
        <Text>Reset</Text>
      </TouchableOpacity>
    )
  }
}



// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  //total: state.calculatorReducer.total
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  resetTotal: () => dispatch(resetTotal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);

