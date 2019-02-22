import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { addComment } from '../actions'

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      commentText: '',
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TextInput
          style={{ height: 48, justifyContent: 'center', backgroundColor: 'green' }}
          onChangeText={(text) => {
            this.setState({ username: text });
          }} />
        <TextInput
          style={{ height: 48, justifyContent: 'center', backgroundColor: 'green' }}
          onChangeText={(text) => {
            this.setState({ commentText: text });
          }} />
        <Button title="Add Comment" onPress={() => {
          this.props.addComment(this.state.username, this.state.commentText);
        }} />
      </View>
    )
  }
}


// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({

});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  addComment: (username, commentText) => dispatch(addComment(username, commentText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);

