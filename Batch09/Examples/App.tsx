import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Menu from './src/Homeworks/Session02/Menu';
import Login from './src/Session03/Login';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header style={{ color: 'red', fontSize: 32 }} text='Hello' fontSize={24} status='waiting' />
      <LikeButton />
      <RateButton /> */}
      {/* <Login /> */}
      <StatusBar style='light' />
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
