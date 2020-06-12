import React, {Component} from 'react';
import {Button, View, Text, TextInput, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

// Validation Schema
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});
export default function FormikExample() {
  return (
    <SafeAreaView style={{flex: 1, padding: 60}}>
      <Formik
        initialValues={{name: '', email: ''}}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          return (
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && touched.email && <Text>{errors.email}</Text>}
              <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                style={{color: errors.name && touched.name ? 'red' : 'black'}}
              />
              {errors.name && touched.name && <Text>{errors.name}</Text>}
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
}
