import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  titleText: {
    fontSize: 24,
    color: '#111A2C',
    fontFamily: 'SVN-Gilroy-Bold',
  },

  subTitleText: {
    marginTop: 8,
    fontSize: 14,
    color: '#525C67',
    fontFamily: 'SVN-Gilroy-Medium',
  },
});

type Props = {
  title: string;
  subTitle: string;
};

function Header(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
      <Text style={styles.subTitleText}>{props.subTitle}</Text>
    </View>
  );
}

export default React.memo(Header);
