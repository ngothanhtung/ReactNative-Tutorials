import React, {Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';

// const h1 = require('./assets/images/h1.png');
import h1 from './assets/images/h1.png';

const H = Dimensions.get('screen').height;
const W = Dimensions.get('screen').width;

export default class ImageExample extends Component {
  render() {
    return (
      <View>
        <Image
          source={h1}
          style={{width: '100%', height: 300}}
          resizeMode="cover"
        />

        <Image
          source={{
            uri:
              'https://i1-suckhoe.vnecdn.net/2020/05/18/nguoiviettumyve-1589800696-253-8868-2379-1589801649.png?w=680&h=408&q=100&dpr=1&fit=crop&s=7OfmkOoZ1Gcv0IOm_1G7sQ',
          }}
          style={{width: W, height: 300}}
          resizeMode="cover"
        />
      </View>
    );
  }
}
