import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, Image, SafeAreaView } from 'react-native';

import MyButton from './components/MyButton';
import LoginScreen from './components/LoginScreen';

import LikeButton from './components/LikeButton';
import Light from './components/Light';

import LifecycleComponent from './components/Session03/LifecycleComponent';

import { useFonts } from 'expo-font';
import React from 'react';
import LifecyleGetData from './components/Session03/LifecyleGetData';
import Dimension from './components/Session04/Dimension';
import BasicFlexBox from './components/Session04/BasicFlexBox';
import Color from './components/Session04/Color';
import GetStartedButton from './components/Exercises/GetStartedButton';
import { Ionicons } from '@expo/vector-icons';
import Block from './components/Exercises/Block';
import ScrollViewExample from './components/Session05/ScrollViewExample';
import ScrollViewWithManyDataExample from './components/Session05/ScrollViewWithManyDataExample';
import FlatListExamples from './components/Session05/FlatListExamples';
import SectionListExample from './components/Session05/SectionListExample';
import ScrollViewInScrollView from './components/Session05/ScrollViewInScrollView';
import SectionListAdvancedExample from './components/Session05/SectionListAdvancedExample';
import BasicNetworking from './components/Session06/BasicNetworking';
import LoginNetworking from './components/Session06/LoginNetworking';
import UseMemoHook from './components/Session07/UseMemoHook';
import UseCallbackHook from './components/Session07/UseCallbackHook';
import AppNavigation from './components/Session08/AppNavigation';
import ReactNativePaperApp from './components/Session09/ReactNativePaperApp';
import LoginForm from './components/Session10/LoginForm';
import RegisterSchemaValidationForm from './components/Session10/RegisterSchemaValidationForm';
import RegisterWithReactNativePaperForm from './components/Session10/RegisterWithReactNativePaperForm';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SVN-Gilroy-Regular': require('./assets/fonts/SVN-Gilroy-Regular.otf'),
    'SVN-Gilroy-Medium': require('./assets/fonts/SVN-Gilroy-Medium.otf'),
    'SVN-Gilroy-SemiBold': require('./assets/fonts/SVN-Gilroy-SemiBold.otf'),
    'SVN-Gilroy-Bold': require('./assets/fonts/SVN-Gilroy-Bold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  // return <AppNavigation />;

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
        <RegisterWithReactNativePaperForm />
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
