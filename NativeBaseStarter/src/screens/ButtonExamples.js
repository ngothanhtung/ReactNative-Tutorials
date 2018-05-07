import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Button, Text, Container, Content } from 'native-base';

const MyView = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

export default class ButtonExamples extends Component {
  render() {
    return (
      <MyView>
        <Button primary style={{ alignSelf: 'center' }}>
          <Text>Default</Text>
        </Button>
      </MyView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});