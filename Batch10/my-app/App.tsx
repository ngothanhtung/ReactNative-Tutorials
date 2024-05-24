import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

import MyButton from './components/MyButton';
import LoginScreen from './components/LoginScreen';

import LikeButton from './components/LikeButton';
import Light from './components/Light';

import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SVN-Gilroy-Regular': require('./assets/fonts/SVN-Gilroy-Regular.otf'),
    'SVN-Gilroy-Medium': require('./assets/fonts/SVN-Gilroy-Medium.otf'),
    'SVN-Gilroy-SemiBold': require('./assets/fonts/SVN-Gilroy-SemiBold.otf'),
    'SVN-Gilroy-Bold': require('./assets/fonts/SVN-Gilroy-Bold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <LoginScreen />

      {/* <LikeButton
        size={9}
        color='#666888'
        isLiked={true}
        list={['item1', 'item2']}
        obj={{
          name: 'Nguyen Van A',
          age: 20,
        }}
      /> */}

      {/* <Light /> */}
      {/* <Button
        title='Submit'
        onPress={() => {
          console.log('Submit');
        }}
      /> */}

      {/* <Image style={{ width: 200, height: 200 }} resizeMode='cover' source={{ uri: 'https://images.unsplash.com/photo-1716369415085-4a6876f91840?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
      <Image style={{ width: 200, height: 200 }} resizeMode='stretch' source={require('./assets/images/Logo/eatme.png')} /> */}

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
    // justifyContent: 'center',
    // alignItems: 'center',
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
