import React, { Component } from 'react';
import { Button, View, Text, Picker, DatePickerAndroid } from 'react-native';

const Line = () => (
	<View style={{ borderTopColor: 'red', borderTopWidth: 1, marginTop: 12 }}></View>
);

const Title = (props) => (
	<Text style={{ fontSize: 16, fontWeight: '700', color: '#000000', marginTop: 12, marginBottom: 12 }}>
		{props.text}
	</Text>
);

export default class PickerExamples extends Component {
	constructor(props) {
		super(props);
		this.state = {
			language: 'js',
			selectedDate: new Date()
		}
	}

	async openDateTimePicker() {
		try {
			const { action, year, month, day } = await DatePickerAndroid.open({
				// Use `new Date()` for current date.
				// May 25 2020. Month 0 is January.
				date: new Date()
			});
			if (action !== DatePickerAndroid.dismissedAction) {
				// Selected year, month (0-11), day
				this.setState({ selectedDate: new Date(year, month, day) });
				// alert(`${year}-${month + 1}-${day}`);
			}
		} catch ({ code, message }) {
			console.warn('Cannot open date picker', message);
		}
	}

	render() {
		return (
			<View style={{ flex: 1, padding: 16 }}>
				<View>
					<Title text="A. General Picker:" />
					<Picker
						selectedValue={this.state.language}
						style={{ height: 40, width: '100%' }}
						onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
						<Picker.Item label="Java" value="java" />
						<Picker.Item label="JavaScript" value="js" />
					</Picker>
					<Text>
						Selected Item: {this.state.language}
					</Text>
				</View>

				<Line />

				<View>
					<Title text="B. DateTime picker:" />
					<Button
						title="Open DateTime picker"
						onPress={() => { this.openDateTimePicker() }}
					/>
					<Text>
						{this.state.selectedDate.toDateString()}
					</Text>
				</View>
			</View>
		);
	}
}
