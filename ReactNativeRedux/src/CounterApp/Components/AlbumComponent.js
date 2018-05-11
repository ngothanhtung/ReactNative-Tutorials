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
							onPress={() => { this.props.getAlbums() }}
							title="Get albums"
						/>

						<Button
							onPress={() => {
								this.props.addAlbum({
									title: 'New Album', coverUrl: 'https://picsum.photos/300/300/?random'
								})
							}}
							title="Add album"
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