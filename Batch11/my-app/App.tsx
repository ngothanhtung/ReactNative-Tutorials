import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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

      <Slider />
      {/* <ToDoList /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
