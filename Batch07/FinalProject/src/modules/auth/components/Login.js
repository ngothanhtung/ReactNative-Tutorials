import React from 'react';
import {View, Text, Button} from 'react-native';

import {useDispatch} from 'react-redux';

import {loginAction} from '../actions';

export default function Login() {
  const dispatch = useDispatch();
  // const [count, setCount] = React.useState(0);
  // const count = useSelector((state) => state.counterReducer.count);

  return (
    <View>
      <Text>Login</Text>
      <Button
        onPress={() => {
          // OnFinish of Formik
          // values.emails / values.password
          dispatch(loginAction('tungnt@softech.vn', '123456789'));
        }}
      />
    </View>
  );
}
