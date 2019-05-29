import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
// FIREBASE
import firebase from 'react-native-firebase';
// Docs: https://firebase.google.com/docs/firestore/quickstart
export default class ReadDataScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection('users')
      .get()
      .then((snapshot) => {
        var users = [];
        snapshot.forEach((doc) => {
          const user = doc.data();
          users.push(user);
        });
        this.setState({ users: [...users] });
        console.log(this.state.users);
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.users && (
          <FlatList
            data={this.state.users}
            keyExtractor={(item, index) => 'user-' + index}
            renderItem={({ item, index }) => (
              <Card elevation={0}>
                <Card.Title title={item.first + ' ' + item.last} subtitle={item.email} left={(props) => <Avatar.Icon {...props} icon='folder' />} />
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
            )}
            // ItemSeparatorComponent={() => <View style={{ height: 1 / 2, backgroundColor: 'black' }} />}
          />
        )}
      </View>
    );
  }
}
