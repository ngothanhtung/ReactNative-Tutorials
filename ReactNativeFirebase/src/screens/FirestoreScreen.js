import React, { Component } from 'react';
import {
  View, Text, TextInput, Button,
  Platform,
  KeyboardAvoidingView,
  ScrollView, FlatList, TouchableHighlight, TouchableOpacity
} from 'react-native';

import firebase from 'react-native-firebase';

import MainContainer from '../components/MainContainer';

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  toggleComplete = () => {
    this.props.doc.ref.update({
      complete: !this.props.complete,
    });
  }

  render() {
    return (
      <TouchableHighlight style={{ padding: 8 }} underlayColor={'#dfe6e9'} activeOpacity={9} onPress={() => this.toggleComplete()}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 8 }}>
            <Text>{this.props.title}</Text>
          </View>
          <View style={{ flex: 4, alignItems: 'flex-end' }}>
            {this.props.complete && (
              <Text>Completed</Text>
            )}
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default class FirestoreScreen extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('Todos');
    this.unsubscribe = null;
    this.state = {
      textInput: '',
      loading: true,
      todos: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const todos = [];
    querySnapshot.forEach((doc) => {
      const { title, complete } = doc.data();
      todos.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        complete,
      });
    });

    this.setState({
      todos: todos.sort((x, y) => {
        return x.title > y.title
      }),
      loading: false,
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAddTodo = () => {
    this.ref.add({
      title: this.state.textInput,
      complete: false,
    });
    this.setState({
      textInput: '',
    });
  }

  render() {
    if (this.state.loading) {
      return null; // or render a loading icon
    }
    return (
      <MainContainer>

        <View style={{ height: 32 }}></View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 18 }}>Firestore Examples</Text>
          <Text>List of TODOs</Text>
        </View>
        <View style={{ height: 16 }}></View>
        <ScrollView style={{ width: '100%' }}>
          <View style={{ height: 16 }}></View>
          <FlatList
            data={this.state.todos}
            renderItem={({ item }) => (
              <Todo {...item} />
            )}
          />
        </ScrollView>
        <View style={{ height: 24 }}></View>
        <KeyboardAvoidingView style={{ width: '100%', alignItems: 'center', paddingLeft: 8, paddingRight: 8 }} behavior='padding'>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder={'Add todo content ...'}
              value={this.state.textInput}
              onChangeText={(text) => {
                this.setState({ textInput: text });
              }}
              onSubmitEditing={() => this.onAddTodo()}
            />
          </View>
          <View style={{ height: 12 }}></View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              disabled={!this.state.textInput.length}
              onPress={() => this.onAddTodo()}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
              </View>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>
      </MainContainer>
    );
  }
}

const styles = {
  textInputContainer: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe6e9',
    width: '100%',
    height: 32
  },

  buttonContainer: {
    width: '100%',
    paddingBottom: 16,
  },

  button: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0984e3',
    height: 40
  },

  buttonText: {
    color: '#ffffff',
  }
}