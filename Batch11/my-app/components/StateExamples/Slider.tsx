import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';
import Fonts from '../../constants/fonts';
import Dots from './Dots';

type Props = {};

const images = [require('../../assets/images/slides/1.png'), require('../../assets/images/slides/2.png'), require('../../assets/images/slides/3.png')];

const titles = ['Choose a Favourite Food', 'Hot Delivery to Home', 'Receive the Great Food'];

const subTitles = [
  'When you oder Eat Steet, we’ll hook you up with exclusive coupon, specials and rewards',
  'We make food ordering fasr, simple and free-no matter if you order online or cash',
  'You’ll receive the great food within a hour. And get free delivery credits for every order.',
];

const Slider = (props: Props) => {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images[index]} />
      <Text style={styles.title}>{titles[index]}</Text>
      <Text style={styles.subTitle}>{subTitles[index]}</Text>
      <Dots dots={images.length} index={index} />
      <CustomButton
        text='Next'
        onPress={() => {
          if (index < images.length - 1) {
            setIndex(index + 1);
          } else {
            setIndex(0);
          }
        }}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: 375,
    height: 461,
  },

  title: {
    fontSize: 24,
    fontFamily: Fonts.GilroySemiBold,
    color: '#111A2C',
    marginTop: 24,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'SVN-Gilroy-Regular',
    color: '#525C67',
    marginTop: 10,
    textAlign: 'center',
  },
});
