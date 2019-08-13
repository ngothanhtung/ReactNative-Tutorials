import React, { Component } from 'react';
import { View, Button } from 'react-native';
import NewVersionComponent from './NewVersionComponent';
// import OldVersionComponent from './OldVersionComponent';

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{this.state.count <= 3 && <NewVersionComponent property={this.state.count} />}
				<Button
					title='Cap nhat props'
					onPress={() => {
						var count = this.state.count;
						count = count + 1;
						this.setState({ count: count });
					}}
				/>
			</View>
		);
	}
}
