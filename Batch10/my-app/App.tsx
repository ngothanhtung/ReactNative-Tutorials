import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import MyButton from './components/MyButton';
import LoginScreen from './components/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <LoginScreen />

      {/* <View style={styles.containerXinChao}>
        <Text>Xin chào</Text>
      </View>
      <View style={styles.containerTamBiet}>
        <Text>Tạm biệt</Text>
        <MyButton text='New' bgColor='red' borderColor='red' />
        <MyButton text='Open' bgColor='yellow' borderColor='white' />
      </View>
      <View style={styles.containerDiaChi}>
        <Text>38 Yen Bai</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    gap: 12,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
  },

  containerXinChao: {
    flex: 1,
    backgroundColor: 'red',
  },
  containerTamBiet: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center', // Canh theo chiều chính
    alignItems: 'center', // Canh theo chiều phụ
  },
  containerDiaChi: {
    height: 40,
    backgroundColor: 'orange',
  },
});
