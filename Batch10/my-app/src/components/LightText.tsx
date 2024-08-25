import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export type TextProps = React.ComponentProps<typeof Text>;

const LightText = (props: TextProps) => {
  return (
    <React.Fragment>
      <Text {...props} style={[props.style, styles.lightColor]}>
        {props.children}
      </Text>
    </React.Fragment>
  );
};

export default LightText;

const styles = StyleSheet.create({
  lightColor: {
    color: '#fff',
  },
});
