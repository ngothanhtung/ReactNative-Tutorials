import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { Field, reduxForm } from 'redux-form';

ReduxTextBox = (props) => {
  const { input, ...inputProps } = props;
  // console.log(props);
  return (
    <View>
      <TextInput
        style={{ height: 44, backgroundColor: props.meta.error ? 'red' : 'yellow', marginTop: 8 }}
        {...props}
        error={!props.meta.valid}
        {...inputProps}
        onChangeText={input.onChange}
        value={input.value}
      />

      {!props.meta.valid && <Text>{props.meta.error}</Text>}
    </View>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Username bat buoc phai nhap';
  }

  if (!values.email) {
    errors.email = 'Email bat buoc phai nhap';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

class AddWorkItemForm extends Component {
  submit = (values) => {
    console.log(values);
    // API : code here ...
  };

  render() {
    const { handleSubmit } = this.props;
    // function handleSubmit có sẵn trong ReduxForm sau khi HOC (reduxForm)
    return (
      <View>
        <Field name='email' component={ReduxTextBox} />
        <Field name='username' component={ReduxTextBox} />
        <Field name='password' component={ReduxTextBox} />
        <Field name='fullname' component={ReduxTextBox} />
        <Field name='address' component={ReduxTextBox} />

        <Button mode='contained' disabled={this.props.invalid} title='Submit' onPress={handleSubmit(this.submit)}>
          Lưu thông tin
        </Button>
      </View>
    );
  }
}

const form = reduxForm({
  // a unique name for the form
  form: 'AddWorkItemForm',

  validate,

  initialValues: {
    username: 'admin',
    email: '',
    fullname: '',
    address: '',
    password: '',
  },
})(AddWorkItemForm);

export default form;
