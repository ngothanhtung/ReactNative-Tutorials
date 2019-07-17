import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

class MyTextInput extends Component {
	render() {
		return (
			<View>
				<TextInput
					style={{ height: 44, backgroundColor: '#ecf0f1' }}
					onChangeText={(text) => {
						this.props.onChangeText(text);
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
