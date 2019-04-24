import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Avatar from './Avatar';
import Picture from './Picture';
import Likes from './Likes';
import Buttons from './Buttons';

export default class Post extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<View>
				<Avatar name={this.props.phone} />
				<Picture />
				<Likes />
				<Buttons />
			</View>
		);
	}
}
