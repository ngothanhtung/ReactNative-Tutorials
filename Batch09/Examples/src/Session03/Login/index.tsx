import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = React.useState('tung@softech.vn');
  const [password, setPassword] = React.useState('123456789');

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hello React Native</Text>
        <Text style={styles.subHeaderText}>Sign in to your account</Text>
      </View>

      {/* BODY */}
      <View style={styles.bodyContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Enter your email'
            keyboardType='email-address'
            autoCapitalize='none'
            autoComplete='off'
            keyboardAppearance='dark'
            returnKeyLabel='send'
            returnKeyType='send'
            defaultValue={email}
            onChangeText={(newText) => {
              setEmail(newText);
            }}
          />
          <MaterialCommunityIcons name='account' size={24} color='black' />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Enter your password'
            secureTextEntry={true}
            defaultValue={password}
            onChangeText={(newText) => {
              setPassword(newText);
            }}
          />
          <MaterialCommunityIcons name='eye-off' size={24} color='black' />
        </View>
      </View>

      {/* FOOTER */}
      <SafeAreaView>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log('Email:', email);
              console.log('Password:', password);
            }}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3365FF',
  },

  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },

  subHeaderText: {
    color: 'white',
    fontSize: 16,
  },

  bodyContainer: {
    flex: 2,
    // backgroundColor: 'green',
    paddingTop: 24,
  },

  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderColor: '#F4F5F9',
    borderWidth: 1,
    backgroundColor: '#F7F9FC',
    marginVertical: 8,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    borderRadius: 4,
  },

  footerContainer: {
    // height: 100,
    padding: 12,
    backgroundColor: 'white',
  },

  textInput: {
    height: 54,
    flex: 1,

    fontSize: 16,
  },

  button: {
    height: 54,
    backgroundColor: '#3365FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
