import React from 'react';
import {View, Text, Button} from 'react-native';

import {useDispatch} from 'react-redux';

import {signInAction} from '../actions';

export default function SignIn() {
  const dispatch = useDispatch();
  // const [count, setCount] = React.useState(0);
  // const count = useSelector((state) => state.counterReducer.count);

  return (
    <View>
      <Text>Sign in</Text>
      <Button
        title="Sign in"
        onPress={() => {
          // OnFinish of Formik
          // values.emails / values.password
          dispatch(signInAction('tungnt@softech.vn', '123456789'));
        }}
      />
    </View>
  );
}
