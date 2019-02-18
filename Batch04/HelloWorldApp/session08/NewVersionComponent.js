import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// https://blog.usejournal.com/understanding-react-native-component-lifecycle-api-d78e06870c6d
export default class NewVersionComponent extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('2. GET DERIVED STATE FROM PROPS');
    // this method is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
    console.log('   2.1. PROPS: ', props);
    console.log('   2.2. STATE: ', state);
    return null;
  }

  constructor(props) {
    // https://reactjs.org/docs/react-component.html#constructor
    // If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
    super(props);
    this.state = {
      count: 0
    }
    console.log('1. CONSTRUCTOR');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().
    console.log('A. GET SNAPSHOT');
    console.log('   PRE PROPS: ', prevProps);
    console.log('   PRE STATE: ', prevState);
    return { count: 999 };
  }
  shouldComponentUpdate(nextProps, nextState) {
    // this method is invoked before rendering when new props or state are being received. Defaults to true
    // this method only exists as a performance optimization. Do not rely on it to “prevent” a rendering, as this can lead to bugs. Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand. PureComponent performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.
    console.log('3. SHOULD UPDATE');
    console.log('   nextProps: ', nextProps);
    console.log('   nextState: ', nextState);
    return false;
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

  render() {
    console.log('3. RENDER');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.state.count}</Text>
        <Button title="Clicl me" onPress={() => {
          this.setState({ count: this.state.count + 1 });
          // this.forceUpdate();
        }} />
      </View>
    );
  }

  componentDidMount() {
    // this method is also invoked once after the native UI for this component has finished rendering ,this is a good place to do some work on data ,updating the state will invoke the render() method again ( without noticing the previous state 
    console.log('4. DID MOUNT');
    console.log('------------------------------------------------------');
  }

  componentWillUnmount() {
    console.log('999. WILL UNMOUNT');
  }
}
