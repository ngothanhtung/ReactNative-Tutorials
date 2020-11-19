import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';

class Avatar extends Component {
	render() {
		return (
			<View>
				<TouchableOpacity
					style={{
						margin: 8,
						width: 83,
						height: 83,
						borderRadius: 99,
						backgroundColor: 'white',
						borderWidth: 3,
						borderColor: this.props.selectedAvatar === this.props.name ? 'yellow' : 'red',
						justifyContent: 'center',
						alignItems: 'center',
						padding: 3,
					}}
				>
					<Image source={{ uri: 'http://i.pravatar.cc/300' }} style={{ height: 74, width: 74, borderRadius: 37.5 }} />
				</TouchableOpacity>
				<View style={{ height: 32, alignItems: 'center' }}>
					<Text>{this.props.name}</Text>
				</View>
			</View>
		);
	}
}

export default class Instagram2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedAvatar: 'Peter',
		};
	}
	render() {
		return (
			<View>
				{/* BLOCK 1 ------------------------------------------------------ */}
				<View
					style={{
						flexDirection: 'row',
						height: 48,
						backgroundColor: 'white',
					}}
				>
					<TouchableOpacity
						style={{ width: 48, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}
						onPress={() => {
							alert('CAMERA is coming soon ...');
						}}
					>
						<FAIcon name='camera' size={24} />
					</TouchableOpacity>
					<View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ fontSize: 18, fontWeight: '700' }}>Instagram</Text>
					</View>
					<TouchableOpacity
						style={{ width: 48, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}
						onPress={() => {
							alert('CAMERA is coming soon ...');
						}}
					>
						<FAIcon name='send' size={24} />
					</TouchableOpacity>
				</View>
				{/* ------------------------------------------------------------- */}
				<ScrollView horizontal={true} style={{ flexDirection: 'row', height: 120, backgroundColor: 'green' }}>
					<Avatar name='Peter' selectedAvatar={this.state.selectedAvatar} />
					<Avatar name='John' selectedAvatar={this.state.selectedAvatar} />
					<Avatar name='Mary' selectedAvatar={this.state.selectedAvatar} />
					<Avatar name='David' selectedAvatar={this.state.selectedAvatar} />
					<Avatar name='Tony' selectedAvatar={this.state.selectedAvatar} />
					<Avatar name='Tung' selectedAvatar={this.state.selectedAvatar} />
				</ScrollView>
				{/* ------------------------------------------------------------- */}
				<View style={{ height: 40, backgroundColor: 'pink' }} />
				<View style={{ height: 400, backgroundColor: 'violet' }} />
				<View style={{ height: 48, backgroundColor: 'orange' }} />
				<View style={{ height: 32, backgroundColor: 'blue' }} />
				<View style={{ height: 60, backgroundColor: 'red' }} />
			</View>
		);
	}
}
