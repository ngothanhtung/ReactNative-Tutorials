import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class GenderComponent extends Component {
	constructor(props) {
		super(props);
		// initialize state
		this.state = {
			gender: 'male',
		};
	}

	render() {
		console.log(this.state.gender);
		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TouchableOpacity
					style={{
						height: 120,
						width: 120,
						backgroundColor:
							this.state.gender === 'male' ? '#f1c40f' : '#bdc3c7',
						borderRadius: 60,
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onPress={() => {
						this.setState({ gender: 'male' });
					}}
				>
					<Text>Male</Text>
				</TouchableOpacity>
				<View style={{ width: 12 }} />
				<TouchableOpacity
					style={{
						height: 120,
						width: 120,
						backgroundColor:
							this.state.gender === 'female' ? '#f1c40f' : '#bdc3c7',
						borderRadius: 60,
						justifyContent: 'center',
						alignItems: 'center',
					}}
					onPress={() => {
						this.setState({ gender: 'female' });
					}}
				>
					<Text>Female</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
