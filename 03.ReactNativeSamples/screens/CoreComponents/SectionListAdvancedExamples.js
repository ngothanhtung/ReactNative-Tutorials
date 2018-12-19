import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const sections = [
  {
    id: 0,
    title: 'Basic Components',
    data: [
      { id: 0, text: 'View' },
      { id: 1, text: 'Text' },
      { id: 2, text: 'Image' },
    ],
    renderItem: ({ item }) => {
      return (
        <Text style={styles.row}>
          {item.text}
        </Text>
      )
    }
  },
  {
    id: 1,
    title: 'List Components',
    data: [
      { id: 3, text: 'ScrollView' },
      { id: 4, text: 'ListView' },
    ],
    renderItem: ({ item }) => {
      return (
        <Text style={styles.rowDark}>
          {item.text}
        </Text>
      )
    }
  }
]

const extractKey = ({ id }) => id

export default class SectionListAdvancedExamples extends Component {
  renderSectionHeader = ({ section }) => {
    return (
      <Text style={styles.header}>
        {section.title}
      </Text>
    )
  }

  render() {
    return (
      <SectionList
        style={styles.container}
        sections={sections}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={extractKey}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  rowDark: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'darkblue',
    color: 'white',
    fontWeight: 'bold',
  },
})

