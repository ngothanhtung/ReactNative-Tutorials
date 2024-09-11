import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import Container from '@/components/Container';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { auth } from '../../../firebase/initializeApp';
import BigText from '../components/BigText';
import PrimaryButton from '../components/PrimaryButton';
import { OnboardingStackParamList } from '../OnboardingStackParamList';
import { RootStackParamList } from '@/navigators/RootStackNavigator/RootStackParamList';

const WIDTH = Dimensions.get('window').width;

const xml = `
<svg width="85" height="279" viewBox="0 0 85 279" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.199951" y="139.5" width="197" height="197" rx="40" transform="rotate(-45 0.199951 139.5)" fill="url(#paint0_linear)"/>
  <path d="M63 129L61.2333 130.767L68.2167 137.75H53V140.25H68.2167L61.2333 147.233L63 149L73 139L63 129Z" fill="#181A20"/>
  <defs>
    <linearGradient id="paint0_linear" x1="0.199951" y1="139.5" x2="0.199951" y2="336.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#BBFFE7"/>
      <stop offset="1" stop-color="#86FFCA"/>
    </linearGradient>
  </defs>
</svg>
`;

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Onboarding1Screen = ({ navigation }: Props) => {
  React.useEffect(() => {
    // Get current user of firebase
    const user = auth.currentUser;
    console.log('currentUser', user);
    if (user) {
      // navigation.navigate('WorkspaceStackNavigator', {
      //   screen: 'CreateWorkspace',
      // });
    }
  }, []);

  return (
    <Container>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/Onboarding.png')} style={{ height: '100%', width: WIDTH - 48, alignSelf: 'flex-end' }} resizeMode='contain' />
        </View>
        <View style={{ flex: 1, marginTop: 32 }}>
          <View style={{ flex: 0, paddingLeft: 48, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <BigText>Let's create</BigText>
              <BigText>a space</BigText>
              <BigText>for your</BigText>
              <BigText>workflow.</BigText>

              <View style={{ flex: 0, paddingTop: 24 }}>
                <PrimaryButton
                  text='Get Started'
                  icon={null}
                  style={{ width: 130 }}
                  onPress={() => {
                    navigation.navigate('OnboardingStackNavigator', {
                      screen: 'Onboarding2',
                    });
                  }}
                />
              </View>
            </View>
            <View style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-end' }}>
              <SvgXml xml={xml} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default Onboarding1Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
