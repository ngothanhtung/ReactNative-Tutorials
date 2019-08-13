import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// https://blog.usejournal.com/understanding-react-native-component-lifecycle-api-d78e06870c6d
export default class NewVersionComponent extends Component {
	constructor(props) {
		// https://reactjs.org/docs/react-component.html#constructor
		// If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
		super(props);
		this.state = {
			count: 0,
		};
		console.log('1. CONSTRUCTOR');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('2. GET DERIVED STATE FROM PROPS');
		// this method is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
		console.log('   2.1. PROPS: ', props);
		console.log('   2.2. STATE: ', state);
		return null;
	}

<<<<<<< HEAD
	getSnapshotBeforeUpdate(prevProps, prevState) {
		// getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().
		console.log('A. GET SNAPSHOT');
		console.log('   PRE PROPS: ', prevProps);
		console.log('   PRE STATE: ', prevState);
		return { count: 999 };
	}
=======
>>>>>>> 826edfcb4976142b843b67b5b977151b6f9f9a8c
	shouldComponentUpdate(nextProps, nextState) {
		// this method is invoked before rendering when new props or state are being received. Defaults to true
		// this method only exists as a performance optimization. Do not rely on it to “prevent” a rendering, as this can lead to bugs. Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand. PureComponent performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.
		console.log('3. SHOULD UPDATE');
<<<<<<< HEAD

		console.log('   thisProps: ', this.props);
		console.log('   thisState: ', this.state);
=======
>>>>>>> 826edfcb4976142b843b67b5b977151b6f9f9a8c
		console.log('   nextProps: ', nextProps);
		console.log('   nextState: ', nextState);
		return true;
	}

<<<<<<< HEAD
	componentDidUpdate(prevProps, prevState, snapshot) {
		// componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
		console.log('B. DID UPDATE');
		console.log('   PRE PROPS: ', prevProps);
		console.log('   PRE STATE: ', prevState);
		console.log('   NEXT PROPS: ', this.props);
		console.log('   NEXT STATE: ', this.state);
		console.log('   SNAPSHOT: ', snapshot);
	}

	render() {
		console.log('3. RENDER');
=======
	render() {
		console.log('4. RENDER');
>>>>>>> 826edfcb4976142b843b67b5b977151b6f9f9a8c
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>{this.state.count}</Text>
				<Button
<<<<<<< HEAD
					title='Clicl me'
=======
					title='Click me'
>>>>>>> 826edfcb4976142b843b67b5b977151b6f9f9a8c
					onPress={() => {
						this.setState({ count: this.state.count + 1 });
						// this.forceUpdate();
					}}
				/>
			</View>
		);
	}

<<<<<<< HEAD
	componentDidMount() {
		// this method is also invoked once after the native UI for this component has finished rendering ,this is a good place to do some work on data ,updating the state will invoke the render() method again ( without noticing the previous state
		console.log('4. DID MOUNT');
=======
	getSnapshotBeforeUpdate(prevProps, prevState) {
		// getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().
		console.log('A. GET SNAPSHOT');
		console.log('   PRE PROPS: ', prevProps);
		console.log('   PRE STATE: ', prevState);
		return { count: 999 };
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
		console.log('B. DID UPDATE');
		console.log('   PRE PROPS: ', prevProps);
		console.log('   PRE STATE: ', prevState);
		console.log('   NEXT PROPS: ', this.props);
		console.log('   NEXT STATE: ', this.state);
		console.log('   SNAPSHOT: ', snapshot);
	}

	componentDidMount() {
		// this method is also invoked once after the native UI for this component has finished rendering ,this is a good place to do some work on data ,updating the state will invoke the render() method again ( without noticing the previous state
		console.log('5. DID MOUNT');
>>>>>>> 826edfcb4976142b843b67b5b977151b6f9f9a8c
		console.log('------------------------------------------------------');
	}

	componentWillUnmount() {
		console.log('999. WILL UNMOUNT');
	}
}
