import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  address: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

type Props = {};

const FormikExample = (props: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Formik
        initialValues={{ email: '', fullName: 'John', address: '' }}
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
              <View>
                <TextInput style={styles.input} placeholder='Enter your full name' onChangeText={handleChange('fullName')} onBlur={handleBlur('fullName')} value={values.fullName} />
                {errors.fullName && touched.fullName ? <Text style={styles.errorText}>{errors.fullName}</Text> : null}
              </View>
              <View>
                <TextInput style={styles.input} placeholder='Enter your address' onChangeText={handleChange('address')} onBlur={handleBlur('address')} value={values.address} />
                {errors.address && touched.address ? <Text style={styles.errorText}>{errors.address}</Text> : null}
              </View>
              <Button onPress={handleSubmit} title='Submit' />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default FormikExample;

const styles = StyleSheet.create({
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
    width: 320,
    marginBottom: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});
