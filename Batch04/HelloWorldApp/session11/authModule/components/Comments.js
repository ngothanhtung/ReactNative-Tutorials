import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { addComment } from '../actions'

class Comments extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {
          <FlatList
            data={this.props.comments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={{ height: 48, borderBottomWidth: 1, borderBottomColor: 'red', backgroundColor: 'yellow' }}>
                <Text style={{ fontSize: 24 }}>
                  {item.username} : {item.commentText}
                </Text>
              </View>
            )}
          />
        }
      </View>
    )
  }
}


// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  comments: state.fbReducer.comments
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  // addComment: (username, password) => dispatch(addComment(username, password)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

