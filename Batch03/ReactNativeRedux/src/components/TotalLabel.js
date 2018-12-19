import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class TotalLabel extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'red', height: 60, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: '700' }}> {this.props.total} </Text>
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

});

export default connect(mapStateToProps, mapDispatchToProps)(TotalLabel);


