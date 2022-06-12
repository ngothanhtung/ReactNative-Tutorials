import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Header from './components/Header';
import LikeButton from './components/LikeButton';
import RateButton from './components/RateButton';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header style={{ color: 'red', fontSize: 32 }} text='Hello' fontSize={24} status='waiting' />
      <LikeButton />
      <RateButton /> */}
      <Login />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
