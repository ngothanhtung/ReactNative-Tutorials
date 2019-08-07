import React, { Component } from 'react';
import { View, Button } from 'react-native';
import NewVersionComponent from './NewVersionComponent';

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			property: 0,
		};
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{this.state.property <= 3 && <NewVersionComponent property={this.state.property} />}
				<Button
					title='Send props'
					onPress={() => {
						var p = this.state.property;
						p++;
						this.setState({ property: p });
					}}
				/>
			</View>
		);
	}
}
