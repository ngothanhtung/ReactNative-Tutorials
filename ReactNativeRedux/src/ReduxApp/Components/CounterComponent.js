import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';

export default class CounterComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 5
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
					<Button
						onPress={() => { this.props.increaseCount(this.state.number) }}
						title="Increase Count"
					/>
					<View style={{ padding: 24 }}>
						<Text style={{ fontSize: 18, fontWeight: '700' }}>{this.props.count}</Text>
					</View>
					<Button
						onPress={() => { this.props.decreaseCount(this.state.number) }}
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