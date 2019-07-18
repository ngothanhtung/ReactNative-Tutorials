import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';

export default class ScrollViewComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photos: [],
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => response.json())
			.then((json) => {
				console.table(json);
				this.setState({ photos: json });
			})
			.catch((error) => {
				console.error(error);
			});
	}

	renderItem = ({ item, index }) => {
		return (
			<View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: 'gray', backgroundColor: 'white', padding: 8 }}>
				{/* <Image source={{ uri: item.thumbnailUrl }} style={{ height: 100, width: 100, borderRadius: 50 }} /> */}
				<Image source={{ uri: 'https://i.pravatar.cc/200?u=' + item.id }} style={{ height: 100, width: 100, borderRadius: 50 }} />
				<View style={{ flex: 1, paddingHorizontal: 8, paddingTop: 8 }}>
					<Text style={{ color: '#2d3436' }}>{item.title}</Text>
				</View>
			</View>
		);
	};

	render() {
		return (
			<View>
				<FlatList data={this.state.photos} keyExtractor={(item, index) => index.toString()} renderItem={this.renderItem} />
			</View>
		);
	}
}
