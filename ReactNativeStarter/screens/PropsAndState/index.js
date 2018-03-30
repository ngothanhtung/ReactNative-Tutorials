import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


const Header = (props) => (
	<View>
		<Text>
			{props.title}
		</Text>
	</View>
)

export default class PropsAndState extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>
					<Header />
				</Text>
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

