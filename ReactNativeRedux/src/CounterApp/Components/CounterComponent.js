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
				<Button
					onPress={this.props.increase}
					title="Increase Count"
					color="#841584"
					accessibilityLabel="Increase Count"
				/>

				<Text>{this.props.count}</Text>

				<Button
					onPress={this.props.decrease}
					title="Decrease Count"
					color="#841584"
					accessibilityLabel="Decrease Count"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});