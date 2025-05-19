import { configureFonts, DefaultTheme, MD2LightTheme, PaperProvider } from 'react-native-paper';
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
import ScrollViewExample from './components/List/ScrollViewExample';
import FlatListExample from './components/List/FlatListExample';
import ProductsExample from './components/List/ProductsExample';
import PicturesExample from './components/List/PicturesExample';
import SectionListExample from './components/List/SectionListExample';
import SectionListAdvancedExample from './components/List/SectionListAdvancedExample';
import AppNavigation from './components/ReactNavigationExamples/AppNavigation';
import BasicExample from './components/Networking/BasicExample';
import Login from './components/Networking/Login';
import CreateCategory from './components/Networking/CreateCategory';
import OnlineShopNavigation from './components/Networking/OnlineShopNavigation';
import LoginForm from './components/ReactFormHook/LoginForm';
import LoginFormWithYupValidation from './components/ReactFormHook/LoginFormWithYupValidation';
import LoginFormWithZodValidation from './components/ReactFormHook/LoginFormWithZodValidation';
import ButtonExample from './components/ReactNativePaper/ButtonExample';
import NotificationExamples from './components/NotificationExamples';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6C44',
  },
};

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
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <StatusBar style="auto" />
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
        {/* <Tip /> */}
        {/* <ScrollViewExample /> */}
        {/* <FlatListExample /> */}
        {/* <ProductsExample /> */}
        {/* <PicturesExample /> */}
        {/* <SectionListExample /> */}
        {/* <SectionListAdvancedExample /> */}
        {/* <AppNavigation /> */}
        {/* <BasicExample /> */}
        {/* <Login /> */}
        {/* <CreateCategory /> */}
        {/* <OnlineShopNavigation /> */}
        {/* <LoginForm /> */}
        {/* <LoginFormWithYupValidation /> */}
        {/* <LoginFormWithZodValidation /> */}
        {/* <ButtonExample /> */}
        <NotificationExamples />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
