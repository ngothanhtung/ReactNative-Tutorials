import Container from '@/components/Container';
import GroupButtons from '@/components/GroupButtons';
import LightText from '@/components/LightText';
import PrimaryButton from '@/components/PrimaryButton';
import SwitchItem from '@/components/SwitchItem';
import COLORS from '@/constants/COLORS';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

type Props = {};

const ChatListScreen = (props: Props) => {
  return (
    <Container style={{ padding: 24 }}>
      <SafeAreaView style={styles.container}>
        <LightText
          style={{
            fontWeight: '700',
            fontSize: 20,
          }}
        >
          ChatListScreen
        </LightText>

        <PrimaryButton>Click me</PrimaryButton>

        <GroupButtons
          onPress={(value) => {
            console.log(value);
          }}
          selectedButton='Overview'
          buttons={['Overview', 'Productivity']}
        />
        <GroupButtons
          onPress={(value) => {
            console.log(value);
          }}
          selectedButton='Favorites'
          buttons={['Favorites', 'Recents', 'All']}
        />
        <View style={{ gap: 20 }}>
          <SwitchItem
            icon={<Ionicons name='checkbox' style={{ color: COLORS.light, fontSize: 16 }} />}
            text='Total Task'
            selectedValue={true}
            onPress={(value) => {
              console.log(value);
            }}
          />
          <SwitchItem
            text='Task Due Soon'
            selectedValue={false}
            onPress={(value) => {
              console.log(value);
            }}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, gap: 12 },
});
