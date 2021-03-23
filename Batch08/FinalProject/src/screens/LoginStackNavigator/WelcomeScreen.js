/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import welcomeXml from '../../assets/svg/welcome';
import Container from '../../components/Container';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginVertical: 12,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: colors.PRIMARY_FONT,
  },
});

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container style={{ padding: 12 }}>
      <View style={{ flex: 1 }}>
        <View flex={1} justifyContent="center">
          <SvgXml xml={welcomeXml} width="100%" />
          <Title style={styles.title}>WELCOME TO SCHOOL</Title>
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
    </Container>
  );
};

export default WelcomeScreen;
