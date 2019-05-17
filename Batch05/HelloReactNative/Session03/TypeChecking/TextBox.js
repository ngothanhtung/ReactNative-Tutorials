import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

class TextBox extends Component {
	constructor(props) {
		super(props);
		console.log(props.name);
	}

	render() {
		return (
			<View style={{ borderRadius: 22, height: 44, backgroundColor: 'gray' }}>
				<TextInput
					style={{ flex: 1, paddingHorizontal: 12 }}
					onChangeText={text => {
						this.props.onTyping(text);
					}}
				/>
			</View>
		);
	}
}

TextBox.propTypes = {
	name: PropTypes.string.isRequired,
	onTyping: PropTypes.func.isRequired,
};

TextBox.defaultProps = {
	name: 'Stranger',
};

export default TextBox;
