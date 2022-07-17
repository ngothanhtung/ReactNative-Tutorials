import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Keyboard, ScrollView, TouchableWithoutFeedback, Platform } from 'react-native';
import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  address: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

type Props = {};

const FormikExample = (props: Props) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.logoContainer}>
            <View style={styles.logo} />
          </View>

          <Formik
            initialValues={{ email: '', fullName: 'John', address: '', phone: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleSubmit, handleReset, handleBlur, values, errors, touched }) => {
              return (
                <View>
                  <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder='Enter your email' onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
                    {errors.email && touched.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder='Enter your full name' onChangeText={handleChange('fullName')} onBlur={handleBlur('fullName')} value={values.fullName} />
                    {errors.fullName && touched.fullName ? <Text style={styles.errorText}>{errors.fullName}</Text> : null}
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput style={[styles.input, { borderWidth: errors.address && touched.address ? 1 : 0 }]} placeholder='Enter your address' onChangeText={handleChange('address')} onBlur={handleBlur('address')} value={values.address} />
                    <Text style={styles.errorText}>
                      <ErrorMessage name='address' />
                    </Text>
                    {/* {errors.address && touched.address ? <Text style={styles.errorText}>{errors.address}</Text> : null} */}
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput style={[styles.input, { borderWidth: errors.job && touched.job ? 1 : 0 }]} placeholder='Enter your job name' onChangeText={handleChange('job')} onBlur={handleBlur('job')} value={values.job} />
                    <Text style={styles.errorText}>
                      <ErrorMessage name='job' />
                    </Text>
                  </View>
                  <View style={styles.inputContainer}>
                    <TextInput style={[styles.input, { borderWidth: errors.country && touched.country ? 1 : 0 }]} placeholder='Enter your country name' onChangeText={handleChange('country')} onBlur={handleBlur('country')} value={values.country} />
                    <Text style={styles.errorText}>
                      <ErrorMessage name='country' />
                    </Text>
                  </View>
                  <Button onPress={handleSubmit} title='Submit' />
                </View>
              );
            }}
          </Formik>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default FormikExample;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  logoContainer: {
    flex: 0,
    alignItems: 'center',
    paddingVertical: 32,
  },

  logo: {
    height: 200,
    width: 200,
    backgroundColor: '#6c5ce7',
    borderRadius: 100,
  },

  formContainer: { flex: 2 },

  inputContainer: {
    flexDirection: 'column',
    marginBottom: 16,
  },

  errorText: {
    color: '#d63031',
  },

  input: {
    height: 56,
    backgroundColor: '#dfe6e9',
    width: '100%',
    marginBottom: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#d63031',
  },
});
