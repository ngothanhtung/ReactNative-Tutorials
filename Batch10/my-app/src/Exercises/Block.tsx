import { Image, StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';

type Props = {
  backgroundColor?: string;
  titleStyle?: StyleProp<TextStyle>;
  avatars?: any[];
  title?: string;
  subTitle?: string;
  subTitleStyle?: StyleProp<TextStyle>;
};

const Block = ({ title, subTitle, backgroundColor = '#12C0E7', titleStyle, subTitleStyle, avatars }: Props) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <View style={styles.avatars}>
        {avatars?.map((avatar, index) => {
          return (
            <Image
              key={index}
              source={avatar}
              style={[
                styles.avatar,
                {
                  marginLeft: index === 0 ? 0 : -18,
                },
              ]}
            />
          );
        })}
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        {subTitle && <Text style={[styles.subTitle, subTitleStyle]}>{subTitle}</Text>}
      </View>
    </View>
  );
};

export default Block;

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 50,
    backgroundColor: '#12C0E7',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
    columnGap: 24,
  },
  avatars: {
    flexDirection: 'row',
  },

  avatar: {
    height: 58,
    width: 58,
    borderRadius: 29,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
  },
});
