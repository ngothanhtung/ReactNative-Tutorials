import React, { Component } from 'react';
import { Text, View, ScrollView, Image, ActivityIndicator } from 'react-native';

export default class ScrollViewExamples extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			photos: null,
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => response.json())
			.then((json) => {
				// console.table(json);
				this.setState({ photos: json.slice(0, 500) });
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				this.setState({ loading: false });
			});
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.state.loading && (
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<ActivityIndicator />
					</View>
				)}
				{this.state.loading === false && (
					<ScrollView>
						{this.state.photos &&
							this.state.photos.map((item, index) => (
								<View key={index} style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: 'gray', backgroundColor: 'white', padding: 8 }}>
									<Image source={{ uri: item.thumbnailUrl }} style={{ height: 100, width: 100 }} />
									<View style={{ flex: 1, paddingHorizontal: 8, paddingTop: 8 }}>
										<Text style={{ color: '#2d3436' }}>{item.title}</Text>
									</View>
								</View>
							))}
					</ScrollView>
				)}
			</View>
		);
	}
}
