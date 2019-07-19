import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
// import LogoImageUrl from '../assets/mobifone-logo.png';

class Loading extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
        {/* <View>
          <Image resizeMode='contain' style={{ width: 240, height: 160 }} source={LogoImageUrl} />
        </View> */}
        <ActivityIndicator size='large' color='#0060AF' />
        <View style={{ paddingVertical: 12 }}>
          <Text style={{ color: '#0060AF', fontSize: 16, fontWeight: '700' }}>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

Loading.defaultProps = {
  text: 'Đang tải dữ liệu ...',
};
export default Loading;
