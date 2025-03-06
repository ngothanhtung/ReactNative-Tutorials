import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/Title';

import CustomButton from './components/CustomButton';

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />

      <Title name='Tùng' color='red' size={20} />
      <Title name='Khánh' color='green' size={64} isItalic={true} />
      <Title name='Tuấn' isBold />
      <CustomButton
        color='#F5F5F8'
        textColor='#111A2C'
        text='Sign Up'
        onPress={() => {
          console.log('Sign Up');
        }}
      />
      <CustomButton
        icon={<AntDesign name='google' size={24} color='white' />}
        text='Continue With Google'
        onPress={() => {
          console.log('Sign In');
        }}
      />
      <CustomButton
        icon={<Entypo name='facebook' size={24} color='white' />}
        color='#0064C0'
        text='Continue With Facebook'
        onPress={() => {
          console.log('Sign In');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 16,
  },
});
