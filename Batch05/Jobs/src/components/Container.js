import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import Loading from './Loading';
import propTypes from 'prop-types';
import colors from '../constants/colors';

class Container extends Component {
  static defaultProps = {
    style: { paddingHorizontal: 8 },
    ready: true,
  };

  static propTypes = {
    ready: propTypes.bool,
    style: propTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <SafeAreaView style={{ flex: 1, backgroundColor: colors.PRIMARY }}>
      //   <View style={{ flex: 1, paddingHorizontal: 8, paddingBottom: 8 }}>
      //     <View style={[{ flex: 1, paddingVertical: 8, borderRadius: 16, backgroundColor: '#ffffff' }, this.props.style]}>
      //       {!this.props.ready && <Loading />}
      //       <View style={{ flex: 1, display: this.props.ready ? 'flex' : 'none' }}>{this.props.children}</View>
      //     </View>
      //   </View>
      // </SafeAreaView>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={[{ flex: 1, padding: 8, backgroundColor: '#ffffff' }]}>
          {!this.props.ready && <Loading />}
          <View style={[{ flex: 1, display: this.props.ready ? 'flex' : 'none' }, this.props.style]}>{this.props.children}</View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Container;
