import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { Button, Title, Text, TextInput } from 'react-native-paper';
import Container from '../../../components/Container';
import colors from '../../../constants/colors';
import * as ActionTypes from '../actions/types';

class AddWorkItem extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      title: '',
      description: '',
      address: '',
      loading: false,
    };
  }

  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Title style={{ color: colors.PRIMARY }}>TẠO MỚI 1 CÔNG VIỆC</Title>
            <Text>Please enter data</Text>
          </View>
          <View style={{ flex: 2 }}>
            <TextInput
              theme={{ colors: { background: 'white' } }}
              ref={(c) => (this.titleInput = c)}
              value={this.state.title}
              mode='outlined'
              label='Title:'
              placeholder={'Enter the title'}
              autoFocus={true}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType={'default'}
              onChangeText={(text) => {
                this.setState({ title: text });
              }}
              // onSubmitEditing={() => this.passwordInput.focus()}
            />
            <View style={{ height: 12 }} />
            <TextInput
              theme={{ colors: { background: 'white' } }}
              ref={(c) => (this.descriptionInput = c)}
              value={this.state.description}
              mode='outlined'
              label='Description:'
              placeholder={'Enter the description'}
              autoFocus={false}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType={'default'}
              onChangeText={(text) => {
                this.setState({ description: text });
              }}
              // onSubmitEditing={() => this.passwordInput.focus()}
            />
            <View style={{ height: 12 }} />
            <TextInput
              theme={{ colors: { background: 'white' } }}
              ref={(c) => (this.addressInput = c)}
              value={this.state.address}
              mode='outlined'
              label='Address:'
              placeholder={'Enter the address'}
              autoFocus={false}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType={'default'}
              onChangeText={(text) => {
                this.setState({ address: text });
              }}
              // onSubmitEditing={() => this.passwordInput.focus()}
            />
            <View style={{ height: 24 }} />
            <Button
              loading={this.props.loading}
              icon='lock'
              mode='contained'
              onPress={() => {
                const { title, description, address } = this.state;
                const workitem = { title, description, address };
                this.props.addWorkItemAsync(workitem);
              }}>
              Lưu thông tin
            </Button>
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }

  componentDidMount() {}
}

const mapStateToProps = (state) => ({
  workitem: state.workItemReducer.workitem,
  loading: state.workItemReducer.loading,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  addWorkItemAsync: (workitem) => dispatch({ type: ActionTypes.ADD_WORKITEM, workitem: workitem }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddWorkItem);
