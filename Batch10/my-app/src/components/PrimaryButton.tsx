import { StyleSheet } from 'react-native';
import React from 'react';

import { Button, ButtonProps } from 'react-native-paper';

const PrimaryButton = (props: ButtonProps) => {
  return (
    <React.Fragment>
      <Button {...props} mode='contained'>
        {props.children}
      </Button>
    </React.Fragment>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
