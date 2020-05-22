import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  userContainer: {
    padding: 12,
    backgroundColor: 'white',
  },

  emailText: {
    fontWeight: '700',
  },

  fullnameText: {
    fontSize: 18,
    fontWeight: '700',
  },

  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
});

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    axios
      .get('https://training.softech.cloud/api/users')
      .then((response) => {
        this.setState({loading: false, users: response.data});
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.userContainer}>
        <Text style={styles.fullnameText}>{item.fullname}</Text>
        <Text style={styles.emailText}>{item.email}</Text>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.users}
          renderItem={this.renderItem}
          keyExtractor={(item) => item._id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    );
  }
}
