/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Title, useTheme } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { SvgXml } from 'react-native-svg';
import Swiper from 'react-native-swiper';

import welcomeXml from '../../assets/svg/welcome/welcome';
import messagingXml from '../../assets/svg/welcome/messaging';
import notificationXml from '../../assets/svg/welcome/notification';

import Container from '../../components/Container';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  titleText: {
    alignSelf: 'center',
    marginVertical: 12,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: colors.PRIMARY_FONT,
  },
});

const screens = [
  {
    id: 1,
    text: 'WELCOME TO SCHOOL',
    xml: welcomeXml,
  },
  {
    id: 3,
    text: 'MESSAGING',
    xml: messagingXml,
  },
  {
    id: 3,
    text: 'NOTIFICATIONS',
    xml: notificationXml,
  },
];

const Screen = ({ navigation, text, xml }) => (
  <View style={{ flex: 1, paddingHorizontal: 12, marginBottom: 24 }}>
    <View flex={1} justifyContent="center">
      <SvgXml xml={xml} width="100%" />
      <Title style={styles.titleText}>{text}</Title>
      <View width={'70%'} alignSelf="center">
        <Text style={{ textAlign: 'center', color: colors.PRIMARY_FONT }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua
        </Text>
      </View>
    </View>
    <View>
      <Button
        mode="contained"
        contentStyle={{ height: 48, flexDirection: 'row-reverse', justifyContent: 'center' }}
        style={{ elevation: 0 }}
        icon="chevron-right"
        onPress={() => {
          navigation.navigate('SignInScreen');
        }}>
        Get Started
      </Button>
    </View>
  </View>
);

const WelcomeScreen = ({ navigation }) => {
  const { colors: themeColors } = useTheme();

  return (
    <Container>
      <Swiper
        loop={false}
        showsButtons={true}
        showsPagination={true}
        nextButton={<Icon name="chevron-right" color={themeColors.primary} size={36} />}
        prevButton={<Icon name="chevron-left" color={themeColors.primary} size={36} />}
        dot={
          <View
            style={{
              backgroundColor: colors.DARK_GRAY,
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: -120,
              marginBottom: 3,
            }}
          />
        }
        activeDotStyle={{ backgroundColor: themeColors.primary, marginTop: -120 }}>
        {screens.map((s) => (
          <Screen key={s.id} navigation={navigation} text={s.text} xml={s.xml} />
        ))}
      </Swiper>
    </Container>
  );
};

export default WelcomeScreen;
