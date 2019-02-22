import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

class CommentCount extends Component {

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 12, backgroundColor: 'orange', borderRadius: 16 }}>
        <Text style={{ fontSize: 15 }}>{this.props.count}</Text>
      </View>
    )
  }
}


// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  count: state.fbReducer.comments.length
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CommentCount);

