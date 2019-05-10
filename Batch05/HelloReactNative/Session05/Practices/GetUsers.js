import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import axios from 'axios';

export default class GetUsers extends Component {
	constructor(props) {
		super(props);
		// state
		this.state = {
			loading: false,
			users: [],
		};
	}

	getUsersByAxios() {
		this.setState({ loading: true });
		axios.get('https://softech.dev/api/training/users').then(response => {
			// response.data = json
			// user json here ...
			this.setState({ users: response.data });
			this.setState({ loading: false });
		});
	}

	getUsers() {
		this.setState({ loading: true });
		fetch('https://softech.dev/api/training/users')
			.then(response => {
				return response.json();
			})
			.then(json => {
				// user json here ...
				console.log(json);
				this.setState({ users: json });
				this.setState({ loading: false });
			});
	}

	componentDidMount() {
		// Get users fromn API (Async)
		// this.getUsers();
		this.getUsersByAxios();
	}

	renderUserItem = ({ item, index }) => {
		return (
			<View style={{ padding: 8, flexDirection: 'row' }}>
				<View>
					<Image
						style={{ width: 60, height: 60, borderRadius: 30 }}
						source={{ uri: 'https://i.pravatar.cc/150?u=' + item.email }}
					/>
				</View>

				<View style={{ flex: 1, paddingHorizontal: 8 }}>
					<View>
						<Text style={{ fontWeight: '700' }}>
							{item.name.first} {item.name.last}
						</Text>
					</View>
					<View>
						<Text>{item.email}</Text>
					</View>
					<View>
						<Text>{item.phone}</Text>
					</View>
					<View style={{ height: 8 }} />
					<View style={{ height: 1, backgroundColor: '#bdc3c7' }} />
				</View>
			</View>
		);
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.state.loading === false && (
					<FlatList
						data={this.state.users}
						renderItem={this.renderUserItem}
						keyExtractor={(item, index) => 'user_' + index.toString()}
					/>
				)}
			</View>
		);
	}
}
