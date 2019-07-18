import React, { Component } from 'react';
import { Text, View, FlatList, SafeAreaView, RefreshControl } from 'react-native';

export default class NetworkingComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loadingUsers: false,
			loadingPosts: false,
			users: null,
			posts: null,
		};
	}

	componentDidMount() {
		this.getPosts();
		this.getUsers();
	}

	async getUsers() {
		try {
			this.setState({ loadingUsers: true });
			let response = await fetch('https://jsonplaceholder.typicode.com/users');
			let responseJson = await response.json();
			console.log(responseJson);
			this.setState({ users: responseJson });
			this.setState({ loadingUsers: false });
		} catch (error) {
			console.error(error);
			this.setState({ loadingUsers: false });
		}
	}

	async getPosts() {
		try {
			this.setState({ loadingPosts: true });
			let response = await fetch('https://jsonplaceholder.typicode.com/posts');
			let responseJson = await response.json();
			this.setState({ posts: responseJson });
			this.setState({ loadingPosts: false });
			console.log('DONE: POSTS');
		} catch (error) {
			console.error(error);
			this.setState({ loadingPosts: false });
		}
	}

	renderUserItem = ({ item, index }) => {
		return (
			<View style={{ height: 80, width: 80, backgroundColor: '#ecf0f1', borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
				<Text key={index}>{item.username}</Text>
			</View>
		);
	};

	renderPostItem = ({ item, index }) => {
		return (
			<View style={{ paddingVertical: 8 }}>
				<View>
					<Text style={{ fontWeight: '700' }}>{item.title}</Text>
				</View>
				<View>
					<Text>{item.body}</Text>
				</View>
			</View>
		);
	};

	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
					{this.state.users && (
						<View style={{ marginBottom: 24 }}>
							<FlatList data={this.state.users} renderItem={this.renderUserItem} keyExtractor={(item, index) => 'user_' + index.toString()} horizontal={true} ItemSeparatorComponent={() => <View style={{ width: 6 }} />} />
						</View>
					)}
					{this.state.posts && (
						<FlatList
							data={this.state.posts}
							renderItem={this.renderPostItem}
							keyExtractor={(item, index) => 'post_' + index.toString()}
							refreshControl={<RefreshControl refreshing={this.state.loadingPosts} onRefresh={() => this.getPosts()} />}
							inverted={false}
							ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
						/>
					)}
				</View>
			</SafeAreaView>
		);
	}
}
