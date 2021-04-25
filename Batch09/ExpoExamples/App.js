import React, { Component } from 'react';
import { Platform, SafeAreaView, View } from 'react-native';

import * as Font from 'expo-font';

// Session 03
// import HandlingTextInput from './src/Session03/Examples/HandlingEvent/HandlingTextInput';
// import LifeCycle from './src/Session03/Examples/LifeCycle';

// Session 04
// import Basic from './src/Session04/Basic';

// Session 05
// import ScrollViewExample from './src/Session05/Examples/ScrollViewExample';
// import ScrollViewWithManyDataExample from './src/Session05/Examples/ScrollViewWithManyDataExample';
// import FlatListExample from './src/Session05/Examples/FlatListExample';
// import SectionListExample from './src/Session05/Examples/SectionListExample';
// import SectionListAdvancedExample from './src/Session05/Examples/SectionListAdvancedExample';

// Session 06
// import BasicFetch from './src/Session06/Examples/BasicFetch';
// import NetworkingExample from './src/Session06/Examples/NetworkingExample';
// import Login from './src/Session06/Examples/Login';
// import Products from './src/Session06/Examples/Products';
// import AxiosExample from './src/Session06/Examples/AxiosExample';
// import MoreAxiosExamples from './src/Session06/Examples/MoreAxiosExamples';

// Session 07
// import BasicClass from './src/Session07/Examples/BasicClass';
// import BasicHook from './src/Session07/Examples/BasicHook';
// import BasicHookNetworking from './src/Session07/Examples/BasicHookNetworking';
// import CustomHookExample from './src/Session07/Examples/CustomHookExample';
import LoginExamples from './src/Session07/Examples/LoginExamples';

// Session 08
import AppNavigator from './src/Session08/Examples/AppNavigator';

// Eatme
// import LoginScreen from './src/Eatme/LoginScreen';
// import HomeScreen from './src/Eatme/HomeScreen';
// import Categories from './src/Session05/Homeworks/Categories';
// import ReviewRider from './src/Session06/Homeworks/ReviewRider';

// Animation
// import Animation_Example01 from './src/Animations/Example01';
// More examples
// import UI02 from './src/UI-Change/UI02';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      'SVN-Gilroy-Regular': require('./assets/fonts/SVN-Gilroy-Regular.otf'),
      'SVN-Gilroy-Medium': require('./assets/fonts/SVN-Gilroy-Medium.otf'),
      'SVN-Gilroy-SemiBold': require('./assets/fonts/SVN-Gilroy-SemiBold.otf'),
      'SVN-Gilroy-Bold': require('./assets/fonts/SVN-Gilroy-Bold.otf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      // return <AppNavigator />;
      return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ minWidth: 414, minHeight: Platform.OS === 'web' ? 812 : null }}>
            {/* <LoginScreen /> */}
            {/* <HandlingTextInput /> */}
            {/* <LifeCycle /> */}
            {/* <Basic /> */}
            {/* <ScrollViewExample /> */}
            {/* <ScrollViewWithManyDataExample /> */}
            {/* <FlatListExample /> */}
            {/* <SectionListExample /> */}
            {/* <SectionListAdvancedExample /> */}
            {/* <HomeScreen /> */}
            {/* <Animation_Example01 /> */}
            {/* <Example02 /> */}
            {/* <Example03 /> */}
            {/* <Example04
              onChange={(status) => {
                console.log('STATUS ON APP', status);
              }}
            /> */}

            {/* <BasicFetch /> */}
            {/* <NetworkingExample /> */}

            {/* <Login /> */}
            {/* <Products /> */}
            {/* <Map /> */}
            {/* <AxiosExample /> */}
            {/* <UI02 /> */}
            {/* <MoreAxiosExamples /> */}
            {/* <ReviewRider /> */}
            {/* <BasicClass title='COUNTER - CLASS' /> */}
            {/* <BasicHook title='COUNTER - HOOK' /> */}
            {/* <BasicHookNetworking /> */}
            {/* <CustomHookExample /> */}
            <LoginExamples />
          </View>
        </SafeAreaView>
      );
    } else {
      return null;
    }
  }
}
