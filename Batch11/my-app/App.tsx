import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Title from './components/Title';

import CustomButton from './components/CustomButton';

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from 'expo-font';
import Logo from './components/Logo';
import LoginScreen from './screens/LoginScreen';
import Counter from './components/StateExamples/Counter';
import SaveMeToogle from './components/StateExamples/SaveMeToogle';
import Slider from './components/StateExamples/Slider';
import ToDoList from './components/StateExamples/ToDoList';
import Example1 from './components/LifecycleExamples/Example1';
import React from 'react';
import ExampleCss from './components/StyleSheetCss/ExampleCss';
import StarRating from './components/Rating/StarRating';
import Tip from './components/TipMoney/Tip';

export default function App() {
  const [fontsLoaded] = useFonts({
    // Gilroy
    'SVN-Gilroy-Regular': require('./assets/fonts/SVN-Gilroy-Regular.otf'),
    'SVN-Gilroy-Medium': require('./assets/fonts/SVN-Gilroy-Medium.otf'),
    'SVN-Gilroy-SemiBold': require('./assets/fonts/SVN-Gilroy-SemiBold.otf'),
    'SVN-Gilroy-Bold': require('./assets/fonts/SVN-Gilroy-Bold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  // const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {/* <LoginScreen /> */}
      {/* <Counter /> */}
      {/* <SaveMeToogle
        onPress={(value) => {
          console.log('value from save me toggle', value);
        }}
      /> */}

      {/* <Slider /> */}
      {/* <ToDoList /> */}
      {/* {count < 5 && <Example1 number={count} />}
      <Button
        title='Click me from App'
        onPress={() => {
          setCount(count + 1);
        }}
      /> */}

      {/* <ExampleCss /> */}
      {/* <StarRating /> */}
      <Tip />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
