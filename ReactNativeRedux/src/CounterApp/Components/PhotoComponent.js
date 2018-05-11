import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	ActivityIndicator
} from 'react-native';

export default class AlbumComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
					{
						this.props.loading && <ActivityIndicator />
					}
					<View>
						<Button
							onPress={() => { this.props.getPhotosAsync() }}
							title="Get photos"
						/>
					</View>
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