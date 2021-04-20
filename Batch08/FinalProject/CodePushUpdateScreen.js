/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import propTypes from 'prop-types';
import { View, Text, Animated } from 'react-native';
import styled from 'styled-components/native';
import codePush from 'react-native-code-push';
import Loading from './src/components/Loading';
import colors from './src/constants/colors';

// STYLES
const BaseText = styled.Text`
  color: ${colors.PRIMARY_FONT};
  font-family: 'Roboto-Regular';
`;

const TitleText = styled(BaseText)`
  text-align: center;
`;

const HeaderText = styled(BaseText)`
  font-family: 'Roboto-Medium';
  text-align: center;
  font-size: 18;
  text-transform: uppercase;
`;

// CLASS
class CodePushUpdateScreen extends React.Component {
  constructor(props) {
    super(props);
    const { progress } = props;
    this.animation = new Animated.Value(progress.receivedBytes);
  }

  componentDidUpdate = (prevProps) => {
    const { progress } = this.props;
    if (prevProps.progress.receivedBytes !== progress.receivedBytes) {
      let toValue = progress.receivedBytes / progress.totalBytes;
      if (toValue > 1) {
        toValue = 1;
      }
      Animated.timing(this.animation, { toValue }).start();
    }
  };

  render = () => {
    const widthInterpolated = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
      extrapolate: 'clamp',
    });

    const { progress, syncStatus } = this.props;
    const progressBarValue = progress.receivedBytes / progress.totalBytes;
    /*eslint radix: ["error", "as-needed"]*/
    const percent = parseInt(progressBarValue * 100);
    // console.log(percent);

    const isLoadingVisible = syncStatus === codePush.SyncStatus.CHECKING_FOR_UPDATE;
    const isProgressBarVisible = syncStatus === codePush.SyncStatus.DOWNLOADING_PACKAGE || syncStatus === codePush.SyncStatus.INSTALLING_UPDATE;

    if (isLoadingVisible) {
      return <Loading />;
    }

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
          <HeaderText>Cập nhật phần mềm</HeaderText>
          {isProgressBarVisible && (
            <View>
              <View style={{}}>
                <TitleText>Đang tải dữ liệu</TitleText>
              </View>
              <View style={{ height: 10, borderRadius: 5, backgroundColor: colors.LIGHT_GRAY, marginVertical: 10 }}>
                <Animated.View style={{ height: 10, borderRadius: 5, backgroundColor: colors.SLL_PRIMARY, width: widthInterpolated }} />
              </View>
              <View style={{}}>
                <Text allowFontScaling style={{ textAlign: 'center', color: colors.PRIMARY_FONT }}>
                  {`${percent}%`}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  };
}

CodePushUpdateScreen.propTypes = {
  syncStatus: propTypes.number.isRequired,
  progress: propTypes.shape({
    totalBytes: propTypes.number,
    receivedBytes: propTypes.number,
  }).isRequired,
};

export default CodePushUpdateScreen;
