import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

const Header = ({text}) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default class Example00 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      photos: [],
    };
  }

  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
        <Button
          title="Click me"
          onPress={() => {
            this.setState({count: this.state.count + 1});
            this.getPhotos();
          }}
        />
      </View>
    );
  }

  getPhotos = () => {
    this.setState({loading: true});
    fetch('https://picsum.photos/v2/list')
      .then((response) => response.json())
      .then((json) => {
        this.setState({photos: json});
        this.setState({loading: false});
      })
      .catch((error) => {
        this.setState({loading: false});
      });
  };

  componentDidMount() {
    this.getPhotos();
  }
}
