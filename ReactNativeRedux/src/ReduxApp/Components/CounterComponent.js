import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';

export default class CounterComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
					<Button
						onPress={() => { this.props.increaseCount(1) }}
						title="Increase Count"
					/>
					<View style={{ padding: 24 }}>
						<Text style={{ fontSize: 18, fontWeight: '700' }}>{this.props.count}</Text>
					</View>
					<Button
						onPress={() => { this.props.decreaseCount(1) }}
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