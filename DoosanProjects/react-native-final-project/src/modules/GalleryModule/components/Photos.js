import React, { Component } from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { connect } from 'react-redux';
import { getPhotosAsync } from '../actions';
import Loading from '../../../components/Loading';
class Photos extends Component {
	render() {
		return <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{this.props.loading && <Loading />}</SafeAreaView>;
	}

	componentDidMount() {
		this.props.getPhotosAsync();
	}
}

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
	photos: state.galleryReducer.photos,
	loading: state.galleryReducer.loading,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
	getPhotosAsync: () => dispatch(getPhotosAsync()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Photos);
