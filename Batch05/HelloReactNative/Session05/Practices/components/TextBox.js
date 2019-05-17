import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

class TextBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			error: false,
		};
	}
	render() {
		return (
			<View style={{ flexDirection: 'row', backgroundColor: '#b2bec3', borderRadius: 24 }}>
				<View style={{ justifyContent: 'center', paddingLeft: 16 }}>
					<Icon name={this.props.iconName} size={24} />
				</View>
				<View style={{ flex: 1 }}>
					<TextInput
						style={{ height: 48, paddingHorizontal: 8 }}
						secureTextEntry={this.props.secureTextEntry}
						placeholder={this.props.placeholder}
						onChangeText={text => {
							this.setState({ error: text.length === 0 });
							this.setState({ text: text });
							this.props.onChangeText(text);
						}}
					/>
				</View>
				{this.state.error && (
					<Animatable.View animation='flash' duration={1000} delay={200} style={{ justifyContent: 'center', paddingRight: 16 }}>
						<Icon name='alert-circle' size={24} color='red' />
					</Animatable.View>
				)}
			</View>
		);
	}
}

TextBox.propTypes = {
	iconName: PropTypes.string.isRequired,
};

TextBox.defaultProps = {
	iconName: 'home',
};

export default TextBox;
