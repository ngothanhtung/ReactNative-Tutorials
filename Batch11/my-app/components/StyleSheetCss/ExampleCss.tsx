import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const ExampleCss = (props: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.subView1} />
        <View style={styles.subView2} />
        <View style={styles.subView3} />

        <View style={styles.subView1} />
        <View style={styles.subView2} />
        <View style={styles.subView3} />
        <View style={styles.subView1} />
        <View style={styles.subView2} />
        <View style={styles.subView3} />
      </ScrollView>
      <View style={styles.view1}></View>
      <View style={styles.view2}>
        <View style={styles.subView1} />
        <View style={styles.subView2} />
        <View style={styles.subView3} />
      </View>
      <View style={styles.view3}>
        <Button
          title='Click me'
          onPress={() => {
            console.log('Button clicked');
          }}
        />
      </View>
    </View>
  );
};

export default ExampleCss;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    width: '100%',
    height: 100,
    backgroundColor: 'red',
  },
  view2: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'space-evenly',
    // gap: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
    // alignItems: 'center',
    alignContent: 'center',
  },
  view3: {
    width: '100%',
    height: 60,
    backgroundColor: 'blue',
  },

  subView1: {
    height: 100,
    width: 75,
    backgroundColor: 'orange',
  },
  subView2: {
    height: 100,
    width: 75,
    backgroundColor: 'pink',
  },
  subView3: {
    height: 100,
    width: 75,
    backgroundColor: 'aqua',
  },
});
