import React, { Component } from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';

const data = [
  {
    title: 'D',
    data: ['Devin', 'David'],
  },
  {
    title: 'J',
    data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],
  },
];

export default class SectionListExamples extends Component {
  renderItem = ({ item, index }) => {
    return (
      <View>
        <Text style={styles.item}>{item}</Text>
      </View>
    );
  };

  renderSectionHeader = ({ section }) => {
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={data}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={(item, index) => {
            return 'person-' + index;
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    padding: 16,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
