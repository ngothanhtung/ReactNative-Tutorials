import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


const Header = (props) => (
	<View>
		<Text>
			Header
		</Text>
	</View>
)

class PropsAndState extends Component {
	render() {
		return (
			<View>
				<Text>  
					<Header />
				</Text>
			</View>
		);
	}
}

export default componentName;
