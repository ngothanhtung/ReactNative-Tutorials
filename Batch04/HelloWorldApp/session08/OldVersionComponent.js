import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// https://blog.usejournal.com/understanding-react-native-component-lifecycle-api-d78e06870c6d
export default class NewVersionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    console.log('1. CONSTRUCTOR');
  }

  componentWillMount() {
    // this method is invoked only once before rendring the component for the first time. used generally to fetch data from external api 
    console.log('2. WILL MOUNT');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // this method is invoked before rendering when new props or state are being received. Defaults to true
    // this method only exists as a performance optimization. Do not rely on it to “prevent” a rendering, as this can lead to bugs. Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand. PureComponent performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.
    console.log('2. SHOULD UPDATE');
    console.log('   nextProps: ', nextProps);
    console.log('   nextState: ', nextState);
    return true;
  }

  componentWillUpdate() {
    console.log('A. WILL UPDATE');
  }

  componentDidUpdate(prevProps, prevState) {
    // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
    console.log('B. DID UPDATE');
    console.log('   PRE PROPS: ', prevProps);
    console.log('   PRE STATE: ', prevState);
    console.log('   NEXT PROPS: ', this.props);
    console.log('   NEXT STATE: ', this.state);
  }

  componentWillReceiveProps(nextProps) {
    console.log('B. WILL RECEIVE PROPS');
    console.log('   NEXT PROPS: ', nextProps);
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
