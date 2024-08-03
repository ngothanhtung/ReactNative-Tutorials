import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList, ScrollView } from 'react-native';

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
      return <Text style={styles.row}>{item.text}</Text>;
    },
  },
  {
    id: 9,
    title: 'Basic Components',
    data: [{ id: 0, text: 'Scroll' }],
    renderItem: ({ item }) => {
      return (
        <ScrollView pagingEnabled={false} style={{ height: 100 }}>
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
        </ScrollView>
      );
    },
  },
  {
    id: 1,
    title: 'List Components',
    data: [
      { id: 3, text: 'ScrollView' },
      { id: 4, text: 'ListView' },
    ],
    renderItem: ({ item }) => {
      return <Text style={styles.rowDark}>{item.text}</Text>;
    },
  },
];

const extractKey = ({ id }) => id;

function SectionListAdvancedExample() {
  const renderSectionHeader = ({ section }) => {
    return <Text style={styles.header}>{section.title}</Text>;
  };
  return <SectionList style={styles.container} sections={sections} renderSectionHeader={renderSectionHeader} keyExtractor={extractKey} />;
}

export default SectionListAdvancedExample;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'yellow',
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
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
});