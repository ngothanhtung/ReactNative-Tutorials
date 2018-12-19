import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<TouchableOpacity onPress={this.props.onPressFunction}>
					<Text>
						{this.props.title}
					</Text>
				</TouchableOpacity>
			</View>
		);
	};
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	onPressFunction: PropTypes.func.isRequired,
}

export default class PropsAndState extends Component {
	constructor(props) {
		super(props);	
	}
	onPressTitle = (params, sender) => {
		console.log('Sender: ', sender);
		console.log('Params: ', params);
		Alert.alert("React Native", params.text);
	}
	render() {
		return (
			<View style={styles.container}>
				<View>
					<Header title={true} onPressFunction={this.onPressTitle.bind(this, { text: 'Hello ReactNative' })} />
				</View>
				<View>
					<Header title="Hello 2" onPressFunction={this.onPressTitle.bind(this, { text: 'Hello world' })} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

