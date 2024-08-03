import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, Image, SafeAreaView } from 'react-native';

// import MyButton from './components/MyButton';
// import LoginScreen from './components/LoginScreen';

// import LikeButton from './components/LikeButton';
// import Light from './components/Light';

// import LifecycleComponent from './src/examples/Session03/LifecycleComponent';

import { useFonts } from 'expo-font';
import React from 'react';
import LifecyleGetData from './src/examples/Session03/LifecyleGetData';
import Dimension from './src/examples/Session04/Dimension';
import BasicFlexBox from './src/examples/Session04/BasicFlexBox';
import Color from './src/examples/Session04/Color';
import GetStartedButton from './src/Exercises/GetStartedButton';
import { Ionicons } from '@expo/vector-icons';
import Block from './src/Exercises/Block';
import ScrollViewExample from './src/examples/Session05/ScrollViewExample';
import ScrollViewWithManyDataExample from './src/examples/Session05/ScrollViewWithManyDataExample';
import FlatListExamples from './src/examples/Session05/FlatListExamples';
import SectionListExample from './src/examples/Session05/SectionListExample';
import ScrollViewInScrollView from './src/examples/Session05/ScrollViewInScrollView';
import SectionListAdvancedExample from './src/examples/Session05/SectionListAdvancedExample';
import BasicNetworking from './src/examples/Session06/BasicNetworking';
import LoginNetworking from './src/examples/Session06/LoginNetworking';
import UseMemoHook from './src/examples/Session07/UseMemoHook';
import UseCallbackHook from './src/examples/Session07/UseCallbackHook';
// import AppNavigation from './components/Session08/AppNavigation';
import ReactNativePaperApp from './src/examples/Session09/ReactNativePaperApp';
import LoginForm from './src/examples/Session10/LoginForm';
import RegisterSchemaValidationForm from './src/examples/Session10/RegisterSchemaValidationForm';
import RegisterWithReactNativePaperForm from './src/examples/Session10/RegisterWithReactNativePaperForm';
import CreateCategory from './src/examples/Session10/CreateCategory';

import AppNavigation from './src/AppNavigation';
import FirebaseExample from '@/examples/Session11/FirebaseExample';
import Chat from '@/examples/Session11/chat';
import CalendarExample from '@/examples/Session12/CalendarExample';
import CheckboxExample from '@/examples/Session12/CheckboxExample';
import DateTimePickerExample from '@/examples/Session12/DateTimePickerExample';
import DocumentPickerExample from '@/examples/Session12/DocumentPickerExample';
import LocationExample from '@/examples/Session12/LocationExample';

import { LogLevel, OneSignal } from 'react-native-onesignal';

OneSignal.Debug.setLogLevel(LogLevel.Verbose);
OneSignal.initialize('fbcc2836-1401-4471-bf99-04f96bce161b');

// Also need enable notifications to complete OneSignal setup
OneSignal.Notifications.requestPermission(true);

export default function App() {
  const [fontsLoaded] = useFonts({
    // Gilroy
    'SVN-Gilroy-Regular': require('./assets/fonts/SVN-Gilroy-Regular.otf'),
    'SVN-Gilroy-Medium': require('./assets/fonts/SVN-Gilroy-Medium.otf'),
    'SVN-Gilroy-SemiBold': require('./assets/fonts/SVN-Gilroy-SemiBold.otf'),
    'SVN-Gilroy-Bold': require('./assets/fonts/SVN-Gilroy-Bold.otf'),
    // Lato
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),

    //Nunito
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),

    //Poppins
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-BoldItalic': require('./assets/fonts/Poppins-BoldItalic.ttf'),

    // Oswald
    'Oswald-Regular': require('./assets/fonts/Oswald-Regular.ttf'),
    'Oswald-Medium': require('./assets/fonts/Oswald-Medium.ttf'),
    'Oswald-Bold': require('./assets/fonts/Oswald-Bold.ttf'),

    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  // return <LocationExample />;

  // return <DocumentPickerExample />;

  // return <DateTimePickerExample />;

  // return <CheckboxExample />;

  // return <CalendarExample />;

  // return <FirebaseExample />;

  // return <Chat />;

  return (
    <React.Fragment>
      <StatusBar style='light' />
      <AppNavigation />
    </React.Fragment>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style='auto' />
        {/* <LifecycleComponent /> */}
        {/* <LifecyleGetData /> */}

        {/* <LoginScreen /> */}

        {/* <LikeButton
        size={9}
        color='#666888'
        isLiked={true}
        list={['item1', 'item2']}
        obj={{
          name: 'Nguyen Van A',
          age: 20,
        }}
      /> */}

        {/* <Light /> */}
        {/* <Button
        title='Submit'
        onPress={() => {
          console.log('Submit');
        }}
      /> */}

        {/* <Image style={{ width: 200, height: 200 }} resizeMode='cover' source={{ uri: 'https://images.unsplash.com/photo-1716369415085-4a6876f91840?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
      <Image style={{ width: 200, height: 200 }} resizeMode='stretch' source={require('./assets/images/Logo/eatme.png')} /> */}

        {/* <View style={styles.containerXinChao}>
        <Text>Xin chào</Text>
      </View>
      <View style={styles.containerTamBiet}>
        <Text>Tạm biệt</Text>
        <MyButton text='New' bgColor='red' borderColor='red' />
        <MyButton text='Open' bgColor='yellow' borderColor='white' />
      </View>
      <View style={styles.containerDiaChi}>
        <Text>38 Yen Bai</Text>
      </View> */}

        {/* <Dimension /> */}
        {/* <BasicFlexBox /> */}
        {/* <Color /> */}
        {/* <View style={{ rowGap: 12 }}>
          <GetStartedButton rightIcon={<Ionicons name='arrow-forward-outline' color='white' size={24} />} />
          <GetStartedButton title='Continue with Apple' leftIcon={<Ionicons name='logo-apple' color='white' size={24} />} />
          <GetStartedButton title='Continue with Google' backgroundColor='#ffffff' color='#000000' leftIcon={<Ionicons name='logo-google' color='black' size={24} />} />
          <GetStartedButton title='Continue with Facebook' backgroundColor='#ffffff' color='#000000' leftIcon={<Ionicons name='logo-facebook' color='black' size={24} />} />
        </View> */}
        {/* <View style={{ rowGap: 12 }}>
          <Block title='Miriam Jimenez' avatars={[require('./assets/images/avatar-1.png')]} />
          <Block
            title='New Teams'
            backgroundColor='#FFF614'
            titleStyle={{
              color: '#000000',
            }}
            avatars={[require('./assets/images/avatar-1.png'), require('./assets/images/avatar-2.png')]}
          />
          <Block
            title='Teams'
            subTitle='Two currently'
            backgroundColor='#740EF5'
            titleStyle={{
              color: '#ffffff',
            }}
            subTitleStyle={{
              color: '#ffffff',
            }}
            avatars={[require('./assets/images/avatar-1.png'), require('./assets/images/avatar-2.png'), require('./assets/images/avatar-3.png')]}
          />
        </View> */}

        {/* <ScrollViewExample /> */}
        {/* <ScrollViewWithManyDataExample /> */}
        {/* <FlatListExamples /> */}
        {/* <SectionListExample /> */}
        {/* <ScrollViewInScrollView /> */}
        {/* <SectionListAdvancedExample /> */}
        {/* <BasicNetworking /> */}
        {/* <LoginNetworking /> */}

        {/* <UseMemoHook /> */}

        {/* <UseCallbackHook /> */}

        {/* <ReactNativePaperApp /> */}
        {/* <LoginForm /> */}
        {/* <RegisterSchemaValidationForm /> */}
        {/* <RegisterWithReactNativePaperForm /> */}
        {/* <CreateCategory /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
  },

  containerXinChao: {
    flex: 1,
    backgroundColor: 'red',
  },
  containerTamBiet: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center', // Canh theo chiều chính
    alignItems: 'center', // Canh theo chiều phụ
  },
  containerDiaChi: {
    height: 40,
    backgroundColor: 'orange',
  },
});
