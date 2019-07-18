import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

class MyTextInput extends Component {
	focus() {
		this.input.focus();
	}

	render() {
		return (
			<View>
				<TextInput
					ref={(c) => (this.input = c)}
					style={{ height: 44, backgroundColor: '#ecf0f1' }}
					onChangeText={(text) => {
						this.props.onChangeText(text);
					}}
					onEndEditing={() => {
						this.props.onEndEditing();
						// console.log(this.props);
					}}
				/>
			</View>
		);
	}
}

MyTextInput.propTypes = {};

// Specifies the default values for props:
MyTextInput.defaultProps = {};

export default MyTextInput;
