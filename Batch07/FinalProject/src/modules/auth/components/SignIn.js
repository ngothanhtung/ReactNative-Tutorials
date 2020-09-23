/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */

import * as Animatable from 'react-native-animatable';
import * as Yup from 'yup';

import React from 'react';
import {Button, Headline, useTheme} from 'react-native-paper';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TextBox from '../../../components/TextBox';
import colors from '../../../constants/colors';
import {signInAction} from '../actions';

// YUP
const SignInSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const SignIn = () => {
  const Touch =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableWithoutFeedback;
  // REDUX
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  // THEMNE
  const paperColor = useTheme().colors;

  // NAVIGATION
  const navigation = useNavigation();
  // REFS
  const containerRef = React.useRef(null);
  const logoRef = React.useRef(null);

  // EFFECTS
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        containerRef.current.transitionTo({height: 0}, 1000);
        containerRef.current.fadeOutUpBig(750);
        logoRef.current.transitionTo({height: 0}, 750);
        logoRef.current.fadeOutUpBig(500);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        containerRef.current.transitionTo({height: 240}, 500);
        containerRef.current.fadeInDownBig(750);

        logoRef.current.transitionTo({height: 240}, 750);
        logoRef.current.fadeInDownBig(1000);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  // RENDER
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        activeOpacity={1}
        style={{flex: 1, backgroundColor: colors.WHITE}}
        onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{flex: 1}}>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={SignInSchema}
            onSubmit={(values) => {
              dispatch(signInAction(values.email, values.password));
            }}>
            {(formik) => (
              <React.Fragment>
                <Animatable.View
                  ref={containerRef}
                  duration={1000}
                  animation="slideInDown"
                  style={{
                    height: 240,
                    backgroundColor: paperColor.primary,
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Animatable.View
                      style={{
                        height: 240,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      ref={logoRef}>
                      <Icon name="cloud-upload" color="white" size={120} />
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: '700',
                          fontSize: 20,
                        }}>
                        GRAB SERVICES
                      </Text>
                      <View height={4} />
                      <Text style={{color: 'white', fontWeight: '700'}}>
                        Final Project of React Native Course
                      </Text>
                    </Animatable.View>
                  </View>
                </Animatable.View>
                <View
                  style={{alignItems: 'center', padding: 16, paddingTop: 36}}>
                  <Headline
                    style={{color: paperColor.primary, fontWeight: '400'}}>
                    ĐĂNG NHẬP
                  </Headline>
                </View>
                <View
                  style={{flex: 0, justifyContent: 'flex-start', padding: 16}}>
                  <TextBox
                    name="email"
                    autoCapitalize="none"
                    iconName="account"
                    disabled={loading}
                    placeholder="Tên đăng nhập"
                    containerStyle={{borderWidth: 0, backgroundColor: 'white'}}
                    inputContainerStyle={{borderBottomWidth: 1.5}}
                    leftIconContainerStyle={{marginLeft: 12}}
                    onBlur={() => formik.handleBlur('email')}
                    onChangeText={formik.handleChange('email')}
                    value={formik.values.email}
                  />
                  <View height={16} />
                  <TextBox
                    name="password"
                    iconName="lock"
                    secureTextEntry
                    disabled={loading}
                    placeholder="Mật khẩu"
                    containerStyle={{borderWidth: 0, backgroundColor: 'white'}}
                    inputContainerStyle={{borderBottomWidth: 1.5}}
                    leftIconContainerStyle={{marginLeft: 12}}
                    onBlur={() => formik.handleBlur('password')}
                    onChangeText={formik.handleChange('password')}
                    value={formik.values.password}
                  />

                  <View
                    style={{
                      alignItems: 'flex-end',
                      marginBottom: 12,
                      marginTop: 12,
                    }}>
                    <Text style={{color: colors.PRIMARY_FONT}}>
                      Quên mật khẩu?
                    </Text>
                  </View>
                </View>
                <Animatable.View
                  animation="slideInUp"
                  duration={1000}
                  style={{flex: 1, padding: 16, justifyContent: 'flex-end'}}>
                  <Button
                    disabled={loading}
                    loading={loading}
                    labelStyle={{fontSize: 18}}
                    contentStyle={{
                      height: 48,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    style={{elevation: 0}}
                    uppercase={false}
                    icon="key"
                    mode="contained"
                    onPress={formik.handleSubmit}
                    dark>
                    {loading ? 'Đang đăng nhập ...' : 'Đăng nhập'}
                  </Button>

                  <Touch
                    onPress={() => {
                      // navigation.navigate(UserRoutes.ACCOUNT_REGISTER_SCREEN);
                    }}>
                    <View style={{alignItems: 'center', padding: 12}}>
                      <Text style={{color: colors.PRIMARY_FONT}}>
                        Bạn chưa có tài khoản? Đăng ký
                      </Text>
                    </View>
                  </Touch>
                </Animatable.View>
              </React.Fragment>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
