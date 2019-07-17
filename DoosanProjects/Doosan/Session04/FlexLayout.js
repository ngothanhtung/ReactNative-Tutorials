import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FlexLayout extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					alignItems: 'stretch',
				}}>
				<View style={{ width: 60, height: 60, backgroundColor: 'red' }} />
				<View style={{ width: 60, height: 60, backgroundColor: 'yellow' }} />
				<View style={{ width: 60, height: 60, backgroundColor: 'green' }} />
				<Icon name='camera' size={24} />
			</View>
		);
	}
}
