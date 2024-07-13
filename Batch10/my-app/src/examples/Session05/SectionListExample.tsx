import React, { Component } from 'react';
import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';

const data = [
  {
    title: 'Phòng nhân sự',
    data: ['Devin', 'David', 'Jackson', 'James', 'Jillian', 'Jimmy'],
  },
  {
    title: 'Phòng kinh doanh',
    data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],
  },
];

function SectionListExample() {
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View>
        <Text style={styles.item}>{item}</Text>
      </View>
    );
  };

  const renderSectionHeader = ({ section }: { section: any }) => {
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  };

  const renderSectionFooter = ({ section }: { section: any }) => {
    return <View style={{ height: 12, backgroundColor: 'yellow', marginBottom: 24 }}></View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderSectionFooter}
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
