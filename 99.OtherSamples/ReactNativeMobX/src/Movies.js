import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { inject, observer } from 'mobx-react';

@inject('LoginStore')
@observer
class Movies extends Component {
  constructor(props) {
    super(props);
    this.props.LoginStore.getMovies();
  }


  renderItem({ item }) {
    return (
      <View style={{ flex: 1 }}>
        <Text>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.LoginStore.movies.slice()}
          renderItem={(item) => (this.renderItem(item))}
          keyExtractor={(item, index) => (index.toString())}
        />
      </View>
    );
  }
}

export default Movies;

