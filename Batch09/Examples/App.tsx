import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Font from 'expo-font';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Menu from './src/Menu';
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
import SvgExample from './src/Session04/SvgExample';
import LoginScreen from './src/Eatme/LoginScreen';
import OnboardingScreen from './src/Eatme/OnboardingScreen';
// import NetworkingExample from './src/Session04/NetworkingExample';
// import NetworkingWithAxios from './src/Session04/NetworkingWithAxios';

import AppNavigator from './src/Session08/AppNavigator';
import UseMemoHook from './src/Session07/UseMemoHook';
import UseCallbackHook from './src/Session07/UseCallbackHook';
import CustomHook from './src/Session07/CustomHook';
import ReactNativePaperApp from './src/Session09/ReactNativePaperApp';
import FormikExample from './src/Session10/FormikExample';
import FirebaseExample from './src/Session11/FirebaseApp';

import Session12 from './src/Session12';

import MioApp from './src/Mio';
import ComponentToComponent from './src/Session13';
import ReduxExamples from './src/Session13/ReduxExamples';

export default function App() {
  const [visible, setVisible] = React.useState(true);
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'SVN-Gilroy-Regular': require('./assets/fonts/SVN-Gilroy-Regular.otf'),
      'SVN-Gilroy-Medium': require('./assets/fonts/SVN-Gilroy-Medium.otf'),
      'SVN-Gilroy-SemiBold': require('./assets/fonts/SVN-Gilroy-SemiBold.otf'),
      'SVN-Gilroy-Bold': require('./assets/fonts/SVN-Gilroy-Bold.otf'),
    });

    setFontsLoaded(true);
  };

  React.useEffect(() => {
    loadFonts();
  }, []);

  return (
    <React.Fragment>
      {fontsLoaded && (
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
          {/* <SvgExample /> */}
          {/* <Menu /> */}
          {/* <LoginScreen /> */}
          {/* <OnboardingScreen /> */}

          {/* <ScrollViewExample /> */}
          {/* <ScrollViewWithManyDataExample /> */}
          {/* <FlatListExample /> */}
          {/* <SectionListExample /> */}
          {/* <SectionListAdvancedExample /> */}
          {/* <NetworkingExample /> */}
          {/* <NetworkingWithAxios /> */}

          {/* REACT HOOKS */}

          {/* <UseMemoHook /> */}
          {/* <UseCallbackHook /> */}
          {/* <CustomHook /> */}

          {/* NAVIGATION */}
          {/* <AppNavigator /> */}

          {/* PAPER */}
          {/* <ReactNativePaperApp /> */}

          {/* FORMIK */}
          {/* <FormikExample /> */}

          {/* ONESIGNAL */}
          <Session12 />

          {/* FIREBASE */}
          {/* <FirebaseExample /> */}

          {/* REDUX */}

          {/* <ComponentToComponent /> */}
          {/* <ReduxExamples /> */}

          {/* MIO APP */}
          {/* <MioApp /> */}
        </View>
      )}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

// console.disableYellowBox = true;
