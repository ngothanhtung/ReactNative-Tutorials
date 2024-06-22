/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Dimensions, Image, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';

import COLORS from '../../constants/COLORS';
import BigText from '../components/BigText';
import Footer from '../components/Footer';
import OutlineButton from '../components/OutlineButton';
import PrimaryButton from '../components/PrimaryButton';

const Slide1 = () => {
  return (
    <View>
      <Image source={require('./assets/Slide1.png')} style={{ marginLeft: 0, width: width, height: height / 1.7 }} resizeMode='cover' />
      <View style={{ paddingHorizontal: 48, marginTop: -60 }}>
        <BigText>Task, </BigText>
        <BigText>Calendar, </BigText>
        <BigText>Chat</BigText>
      </View>
      <View style={{ flexDirection: 'row', paddingHorizontal: 48, paddingVertical: 24 }}>
        <Dot color={COLORS.primary} />
        <Dot color={COLORS.gray} />
        <Dot color={COLORS.gray} />
      </View>
    </View>
  );
};

const Slide2 = () => {
  return (
    <View>
      <Image source={require('./assets/Slide2.png')} style={{ marginLeft: 0, width: width, height: height / 1.7 }} resizeMode='cover' />
      <View style={{ paddingHorizontal: 48, marginTop: -60 }}>
        <BigText>Work, </BigText>
        <BigText>Anywhere, </BigText>
        <BigText>Easily</BigText>
      </View>
      <View style={{ flexDirection: 'row', paddingHorizontal: 48, paddingVertical: 24 }}>
        <Dot color={COLORS.gray} />
        <Dot color={COLORS.primary} />
        <Dot color={COLORS.gray} />
      </View>
    </View>
  );
};

const Slide3 = () => {
  return (
    <View>
      <Image source={require('./assets/Slide3.png')} style={{ marginLeft: 0, width: width, height: height / 1.7 }} resizeMode='cover' />
      <View style={{ paddingHorizontal: 48, marginTop: -60 }}>
        <BigText>Manage</BigText>
        <BigText>Everything</BigText>
        <BigText>on Phone</BigText>
      </View>
      <View style={{ flexDirection: 'row', paddingHorizontal: 48, paddingVertical: 24 }}>
        <Dot color={COLORS.gray} />
        <Dot color={COLORS.gray} />
        <Dot color={COLORS.primary} />
      </View>
    </View>
  );
};

const slides = [
  {
    component: Slide1,
  },
  {
    component: Slide2,
  },
  {
    component: Slide3,
  },
];

const { width, height } = Dimensions.get('window');

function Dot({ color }: { color: string }) {
  return <View style={{ marginRight: 12, height: 8, width: 8, borderRadius: 4, backgroundColor: color }} />;
}

export default function Onboarding2Screen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => 'screen-' + index}
          data={slides}
          renderItem={({ item, index }) => {
            const Component = item.component;
            return (
              <View style={{ flex: 1, width: width }}>
                <Component />
              </View>
            );
          }}
        />
      </View>
      <View style={{ height: 176 }}>
        <View style={{ paddingHorizontal: 48 }}>
          <PrimaryButton text='Continue with Email' />
        </View>
        <View style={{ height: 12 }} />
        <View style={{ paddingHorizontal: 48, flexDirection: 'row', flex: 1 }}>
          <OutlineButton icon='google' color='#FF968E' />
          <View style={{ width: 12 }} />
          <OutlineButton icon='facebook' color={COLORS.primary} />
        </View>
        <View style={{ marginTop: 16 }}>
          <Footer />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
  },
});
