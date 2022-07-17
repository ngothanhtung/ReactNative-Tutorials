import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React from 'react';
import { Formik } from 'formik';

type Props = {};

const FormikExample = (props: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Formik
        initialValues={{ email: '', fullName: 'John' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit, handleReset, handleBlur, values }) => {
          return (
            <View>
              <TextInput style={styles.input} placeholder='Enter your email' onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
              <TextInput style={styles.input} placeholder='Enter your full name' onChangeText={handleChange('fullName')} onBlur={handleBlur('fullName')} value={values.fullName} />
              <TextInput style={styles.input} placeholder='Enter your full name' onChangeText={handleChange('address')} onBlur={handleBlur('address')} value={values.address} />
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
  input: {
    height: 56,
    backgroundColor: '#dfe6e9',
    width: 320,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});
