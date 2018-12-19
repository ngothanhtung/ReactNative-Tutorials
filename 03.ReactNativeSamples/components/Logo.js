import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20
  }
});

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      internalText: props.text
    }

    console.log(this.state.internalText);
  }

  onPressContactUs = () => {
    this.state.internalText = "NEW STATE";
    this.setState(this.state);
    alert(this.state.internalText);
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.logoText}
        </Text>
        <Text>
          {this.state.internalText}
        </Text>
        <Button title="Contact Us" onPress={this.onPressContactUs} />

      </View>
    );
  }
}

export default Logo;