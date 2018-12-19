import React, { Component } from 'react';
import {
  DatePickerIOS,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default class DatePickerIOSScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.selectedDate}
          onDateChange={(date) => { this.setState({ selectedDate: date }); }}
        />

        <Text style={{ alignSelf: 'center' }}>
          {this.state.selectedDate.toString()}
        </Text>
      </View>
    );
  }
}
