/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
import auth from '@react-native-firebase/auth';
import * as Animatable from 'react-native-animatable';
import * as Yup from 'yup';

import React from 'react';
import { Button, Headline, useTheme } from 'react-native-paper';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TextBox from '../../../components/TextBox';
import colors from '../../../constants/colors';
import { autoSignInAction } from '../actions';

// YUP
const SignInSchema = Yup.object().shape({
  phone: Yup.string().required(),
  confirmCode: Yup.string(),
});

const SignIn = () => {
  const [confirmationResult, setConfirmationResult] = React.useState(null);
  const Touch = Platform.OS === 'ios' ? TouchableOpacity : TouchableWithoutFeedback;
  // REDUX
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  // THEMNE
  const themeColor = useTheme().colors;

  // NAVIGATION
  const navigation = useNavigation();
  // REFS
  const containerRef = React.useRef(null);
  const logoRef = React.useRef(null);

  // EFFECTS
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      containerRef.current.transitionTo({ height: 0 }, 1000);
      containerRef.current.fadeOutUpBig(750);
      logoRef.current.transitionTo({ height: 0 }, 750);
      logoRef.current.fadeOutUpBig(500);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      containerRef.current.transitionTo({ height: 240 }, 500);
      containerRef.current.fadeInDownBig(750);

      logoRef.current.transitionTo({ height: 240 }, 750);
      logoRef.current.fadeInDownBig(1000);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  // RENDER
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity activeOpacity={1} style={{ flex: 1, backgroundColor: colors.WHITE }} onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
          <Animatable.View
            ref={containerRef}
            duration={1000}
            animation="slideInDown"
            style={{
              height: 240,
              backgroundColor: themeColor.primary,
              justifyContent: 'center',
            }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
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
                <Text style={{ color: 'white', fontWeight: '700' }}>A project of Aptech Education</Text>
              </Animatable.View>
            </View>
          </Animatable.View>
          <View style={{ alignItems: 'center', padding: 16, paddingTop: 36 }}>
            <Headline style={{ color: themeColor.primary, fontWeight: '400' }}>ĐĂNG NHẬP</Headline>
          </View>
          <Formik
            initialValues={{
              phone: '+84934933468',
              confirmCode: '',
            }}
            validationSchema={SignInSchema}
            onSubmit={(values) => {
              console.log(values);

              if (!confirmationResult) {
                auth()
                  .signInWithPhoneNumber(values.phone, true)
                  .then((result) => {
                    console.log(result);
                    if (result) {
                      setConfirmationResult(result);
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    Alert.alert('Thông báo', 'Có lỗi khi xác nhận mã đăng nhập');
                  });
              } else {
                confirmationResult.confirm(values.confirmCode).then((result) => {
                  const user = result.user;
                  dispatch(autoSignInAction(user));
                });
              }
            }}>
            {(formik) => (
              <React.Fragment>
                <View style={{ flex: 0, justifyContent: 'flex-start', padding: 16 }}>
                  <TextBox
                    name="phone"
                    autoCapitalize="none"
                    iconName="cellphone"
                    disabled={loading}
                    placeholder="Số điện thoại"
                    containerStyle={{ borderWidth: 0, backgroundColor: 'white' }}
                    inputContainerStyle={{ borderBottomWidth: 1.5 }}
                    leftIconContainerStyle={{ marginLeft: 12 }}
                    onBlur={() => formik.handleBlur('phone')}
                    onChangeText={formik.handleChange('phone')}
                    value={formik.values.phone}
                  />
                  <View height={16} />
                  {confirmationResult && (
                    <TextBox
                      name="confirmCode"
                      iconName="lock"
                      disabled={loading}
                      placeholder="Mã xác nhận"
                      containerStyle={{ borderWidth: 0, backgroundColor: 'white' }}
                      inputContainerStyle={{ borderBottomWidth: 1.5 }}
                      leftIconContainerStyle={{ marginLeft: 12 }}
                      onBlur={() => formik.handleBlur('confirmCode')}
                      onChangeText={formik.handleChange('confirmCode')}
                      value={formik.values.confirmCode}
                    />
                  )}
                </View>
                <Animatable.View animation="slideInUp" duration={1000} style={{ flex: 1, padding: 16, justifyContent: 'flex-end' }}>
                  <Button
                    disabled={loading}
                    loading={loading}
                    labelStyle={{ fontSize: 16 }}
                    contentStyle={{
                      height: 48,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    style={{ elevation: 0 }}
                    // uppercase={false}
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
                    <View style={{ alignItems: 'center', padding: 12 }}>
                      <Text style={{ color: colors.PRIMARY_FONT }}>Bạn chưa có tài khoản? Đăng ký</Text>
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
