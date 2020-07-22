/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Button,
  Platform,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDispatch} from 'react-redux';

import {signInAction} from '../actions';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function SignIn() {
  const dispatch = useDispatch();

  const logoRef = React.useRef(null);

  // const [count, setCount] = React.useState(0);
  // const count = useSelector((state) => state.counterReducer.count);

  // EFFECTS
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        // containerRef.current.transitionTo({height: 0}, 1000);
        // containerRef.current.fadeOutUpBig(750);
        logoRef.current.transitionTo({height: 0}, 750);
        logoRef.current.fadeOutUpBig(500);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // containerRef.current.transitionTo({height: 240}, 500);
        // containerRef.current.fadeInDownBig(750);
        logoRef.current.transitionTo({height: 240}, 750);
        logoRef.current.fadeInDownBig(1000);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        activeOpacity={1}
        style={{flex: 1, backgroundColor: 'white'}}
        onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{flex: 1}}>
          <Animatable.View
            style={{
              height: 240,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
            }}
            ref={logoRef}>
            <Icon name="cloud-upload" color="white" size={120} />
            <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
              GRAB SERVER
            </Text>
          </Animatable.View>
          <View height={4} />
          <TextInput placeholder="Enter your email" />
          <View height={4} />
          <TextInput placeholder="Enter your password" />

          <Button
            title="Sign in"
            onPress={() => {
              // OnFinish of Formik
              // values.emails / values.password
              dispatch(signInAction('tungnt@softech.vn', '123456789'));
            }}
          />
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
