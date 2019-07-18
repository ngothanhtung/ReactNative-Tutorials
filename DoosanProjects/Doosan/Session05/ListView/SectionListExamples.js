import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, SafeAreaView } from 'react-native';

const data = [{ title: 'A. MARKETING', data: ['Devin', 'Peter'] }, { title: 'B. ACCOUNTING', data: ['Jackson', 'Mary', 'Willian', 'Jimmy', 'Joe', 'John', 'Julie'] }];

export default class SectionListExamples extends Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<SectionList
					sections={data}
					renderItem={({ item }) => (
						<View style={styles.item}>
							<Text style={{ color: '#2d3436' }}>{item}</Text>
						</View>
					)}
					renderSectionHeader={({ section }) => (
						<View style={styles.sectionHeader}>
							<Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>{section.title}</Text>
						</View>
					)}
					renderSectionFooter={({ section }) => (
						<View style={{ alignItems: 'flex-end', padding: 8 }}>
							<Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }}>Total: {section.data.length} person(s)</Text>
						</View>
					)}
					ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#dfe6e9' }} />}
					SectionSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#dfe6e9' }} />}
					keyExtractor={(item, index) => index}
				/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	sectionHeader: {
		height: 48,
		paddingHorizontal: 8,
		justifyContent: 'center',
		backgroundColor: '#0984e3',
	},
	item: {
		height: 40,
		paddingHorizontal: 8,
		justifyContent: 'center',
	},
});
