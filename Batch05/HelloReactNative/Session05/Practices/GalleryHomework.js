import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

export default class GalleryHomework extends Component {
	static navigationOptions = {
		title: 'Picsum Photos',
		headerBackTitle: null,
	};

	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			done: false,
			mode: 'grid',
			selectedImage: null,
			loadedHighQualityImage: false,
			groupPhotos: [],
		};

		this.getPhotosAsync();
	}

	getPhotosAsync = () => {
		axios
			.get('https://picsum.photos/list')
			.then((response) => {
				this.setState({ photos: response.data });
				console.log(response);
				this.setState({ done: true });
			})
			.catch((error) => {
				Alert.alert('Error', error);
			});
	};

	renderItem = ({ item }) => {
		return (
			<View style={{ flex: 1, margin: 2 }}>
				<View style={{ width: '100%', height: this.state.mode === 'list' ? height / 3 : height / 6 }}>
					<TouchableOpacity
						onPress={() => {
							this.setState({ mode: 'view', groupPhotos: this.state.photos.slice(item.id, 5), selectedImage: item, loadedHighQualityImage: false });
							console.log(this.state.groupPhotos);
						}}
					>
						<Image resizeMode='cover' source={{ uri: 'https://picsum.photos/600/600/?image=' + item.id }} style={{ height: '100%', width: '100%' }} />
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	componentWillUnmount() {
		this.setState({ albums: [] });
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				{/* SELECT MODE */}
				<View style={{ height: 40, backgroundColor: '#ecf0f1', marginBottom: 4 }}>
					<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 6 }}>
						<TouchableOpacity
							onPress={() => {
								this.setState({ mode: 'grid' });
							}}
						>
							<Ionicons name='ios-grid' size={24} style={{ color: this.state.mode === 'grid' ? '#2980b9' : '#bdc3c7' }} />
						</TouchableOpacity>

						<View style={{ width: 6 }} />

						<TouchableOpacity
							onPress={() => {
								this.setState({ mode: 'list' });
							}}
						>
							<Ionicons name='ios-list-box' size={24} style={{ color: this.state.mode === 'list' ? '#2980b9' : '#bdc3c7' }} />
						</TouchableOpacity>

						<View style={{ width: 6 }} />

						<TouchableOpacity
							onPress={() => {
								this.setState({ mode: 'slide' });
							}}
						>
							<Ionicons name='ios-square' size={24} style={{ color: this.state.mode === 'slide' ? '#2980b9' : '#bdc3c7' }} />
						</TouchableOpacity>
					</View>
				</View>
				{/* SLIDE MODE */}
				{this.state.done && this.state.mode === 'slide' && (
					<View style={{ flex: 1, justifyContent: 'center' }}>
						<FlatList
							style={{ marginLeft: 2, marginRight: 2 }}
							data={this.state.photos}
							renderItem={({ item }) => (
								<Image
									resizeMode='contain'
									source={{ uri: 'https://picsum.photos/1600/1200/?image=' + item.id }}
									style={{ height: '100%', width: width - 4 }}
								/>
							)}
							keyExtractor={(item, index) => index.toString()}
							pagingEnabled
							horizontal
						/>
					</View>
				)}
				{/* LIST | GRID MODE */}
				{this.state.done && this.state.mode !== 'slide' && (
					<View>
						<FlatList
							style={{ marginLeft: 2, marginRight: 2 }}
							data={this.state.photos}
							renderItem={this.renderItem}
							keyExtractor={(item, index) => index.toString()}
							numColumns={this.state.mode === 'list' ? 1 : 3}
							key={this.state.mode === 'list' ? 1 : 0}
						/>
					</View>
				)}

				{/* VIEW MODE */}
				{this.state.mode === 'view' && (
					<View style={{ zIndex: 999, position: 'absolute', height: '100%', width: width, backgroundColor: '#000000' }}>
						<View style={{ flex: 1, justifyContent: 'center' }}>
							<TouchableOpacity
								style={{}}
								onPress={() => {
									this.setState({ mode: 'grid' });
								}}
							>
								<Image
									onLoad={() => {
										this.setState({ loadedHighQualityImage: true });
									}}
									resizeMode='contain'
									source={{ uri: 'https://picsum.photos/1600/1200/?image=' + this.state.selectedImage.id }}
									style={{ height: '100%', width: '100%' }}
								/>
							</TouchableOpacity>
						</View>
					</View>
				)}
				{this.state.mode === 'view' && this.state.loadedHighQualityImage === false && (
					<View style={{ zIndex: 999, position: 'absolute', height: '100%', width: width, backgroundColor: '#000000' }}>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<ActivityIndicator size='large' color='#ffffff' />
						</View>
					</View>
				)}

				{/* WAITING MODE */}
				{this.state.done === false && (
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<ActivityIndicator size='large' color='#2d3436' />
					</View>
				)}
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
});
