import React, { Component } from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';

const data = [
  {
    title: 'Phòng nhân sự',
    data: ['Devin', 'David'],
  },
  {
    title: 'Phòng kinh doanh',
    data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],
  },
];

function SectionListExample() {
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Text style={styles.item}>{item}</Text>
      </View>
    );
  };

  const renderSectionHeader = ({ section }) => {
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => {
          return 'person-' + index;
        }}
      />
    </SafeAreaView>
  );
}

export default SectionListExample;

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
