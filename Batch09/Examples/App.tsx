import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Menu from './src/Homeworks/Session02/Menu';
import EffectExample from './src/Session03/EffectExample';
import Login from './src/Session03/Login';
import StateExample from './src/Session03/StateExamples';
import StyleExample from './src/Session04';
import BasicFlexBox from './src/Session04/BasicFlexBox';
import ImageExample from './src/Session04/ImageExample';
import FlatListExample from './src/Session05/FlatListExample';
import ScrollViewExample from './src/Session05/ScrollViewExample';
import ScrollViewWithManyDataExample from './src/Session05/ScrollViewWithManyDataExample';
import SectionListAdvancedExample from './src/Session05/SectionListAdvancedExample';
import SectionListExample from './src/Session05/SessionListExample';
// import NetworkingExample from './src/Session04/NetworkingExample';
// import NetworkingWithAxios from './src/Session04/NetworkingWithAxios';

export default function App() {
  const [visible, setVisible] = React.useState(true);

  return (
    <View style={styles.container}>
      {/* <Header style={{ color: 'red', fontSize: 32 }} text='Hello' fontSize={24} status='waiting' />
      <LikeButton />
      <RateButton /> */}
      {/* <Login /> */}
      <StatusBar style='light' />
      {/* <Menu /> */}
      {/* <StateExample /> */}
      {/* {visible && <EffectExample />} */}

      {/* <Button
        title='Hide component'
        onPress={() => {
          setVisible(!visible);
        }}
      /> */}

      {/* <StyleExample /> */}
      {/* <BasicFlexBox /> */}
      {/* <ImageExample /> */}
      {/* <ScrollViewExample /> */}
      {/* <ScrollViewWithManyDataExample /> */}
      {/* <FlatListExample /> */}
      {/* <SectionListExample /> */}
      <SectionListAdvancedExample />
      {/* <NetworkingExample /> */}
      {/* <NetworkingWithAxios /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
