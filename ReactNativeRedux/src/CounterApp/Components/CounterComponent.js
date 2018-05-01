import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';

export default class CounterComponent extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
					<Button
						onPress={this.props.increaseCount}
						title="Increase Count"
					/>

					<Text>{this.props.count}</Text>

					<Button
						onPress={this.props.decreaseCount}
						title="Decrease Count"
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});