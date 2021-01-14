import React from 'react';
import { Button } from 'react-native';
import AppContext from './AppContext';

export default ({ text }) => {
  const { dispatch } = React.useContext(AppContext);

  return <Button onPress={() => dispatch({ type: 'increment' })} title={text} />;
};
