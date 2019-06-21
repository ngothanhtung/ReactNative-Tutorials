import React, { Component } from 'react';
import { Image, Text, View, ActivityIndicator, FlatList } from 'react-native';

import { connect } from 'react-redux';
import { getPhotosAsync } from '../actions';

class Photos extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.props.loading && (
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<ActivityIndicator />
					</View>
				)}
				{!this.props.loading && (
					<View>
						<FlatList
							data={this.props.photos}
							keyExtractor={(item, index) => 'photo-' + index}
							renderItem={({ item, index }) => {
								return (
									<View>
										<Image source={{ uri: item.thumbnailUrl }} style={{ width: 150, height: 150 }} />
									</View>
								);
							}}
						/>
					</View>
				)}
			</View>
		);
	}

	componentDidMount() {
		console.log('OK');
		this.props.getPhotosAsync();
	}
}

const mapStateToProps = (state) => ({
	photos: state.photoReducer.photos,
	loading: state.photoReducer.loading,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
	getPhotosAsync: () => dispatch(getPhotosAsync()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Photos);
