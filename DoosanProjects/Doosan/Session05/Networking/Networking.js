import React, { Component } from 'react';
import { Text, View, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';

export default class NetworkingComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			movies: null,
		};
	}

	componentDidMount() {
		// CU PHAP CU (PHO BIEN): ASYNC: PROMISE
		fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((json) => {
				console.log(json);
				this.setState({ movies: json.movies });
				this.setState({ loading: false });
			})
			.catch((error) => {
				this.setState({ loading: false });
				this.setState({ movies: null });
				console.error(error);
			});

		console.log('DONE');
	}

	// CU PHAP MOI ASYNC:  ASYNC / AWAIT
	// async getMovies() {
	// 	try {
	// 		let response = await fetch('https://facebook.github.io/react-native/movies.json');
	// 		let responseJson = await response.json();
	// 		this.setState({ movies: responseJson.movies });
	// 		console.log('DONE');
	// 	} catch (error) {}
	// }

	render() {
		console.log('RENDER');
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
					{this.state.loading && (
						<View style={{ justifyContent: 'center', alignItems: 'center' }}>
							<ActivityIndicator size='large' />
							<View style={{ height: 16 }} />
							<Text>Đang tải dữ liệu ...</Text>
						</View>
					)}
					{this.state.loading === false &&
						this.state.movies &&
						this.state.movies.map((item, index) => {
							return (
								<View key={'movie-' + index}>
									<Text style={{ fontSize: 18 }}>{item.title}</Text>
									<Text style={{ fontSize: 18 }}>{item.releaseYear}</Text>
								</View>
							);
						})}
				</View>
			</SafeAreaView>
		);
	}
}
