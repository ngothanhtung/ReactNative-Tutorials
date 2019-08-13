import React, { Component } from 'react';
import { View, Button } from 'react-native';
import NewVersionComponent from './NewVersionComponent';
<<<<<<< HEAD
// import OldVersionComponent from './OldVersionComponent';
=======
>>>>>>> 826edfcb4976142b843b67b5b977151b6f9f9a8c

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
<<<<<<< HEAD
			count: 0,
=======
			property: 0,
>>>>>>> 826edfcb4976142b843b67b5b977151b6f9f9a8c
		};
	}
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<<<<<<< HEAD
				{this.state.count <= 3 && <NewVersionComponent property={this.state.count} />}
				<Button
					title='Cap nhat props'
					onPress={() => {
						var count = this.state.count;
						count = count + 1;
						this.setState({ count: count });
=======
				{this.state.property <= 3 && <NewVersionComponent property={this.state.property} />}
				<Button
					title='Send props'
					onPress={() => {
						var p = this.state.property;
						p++;
						this.setState({ property: p });
>>>>>>> 826edfcb4976142b843b67b5b977151b6f9f9a8c
					}}
				/>
			</View>
		);
	}
}
