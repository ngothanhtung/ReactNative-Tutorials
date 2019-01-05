import React, { Component } from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import Button from './Button'
import Header from './Header'
import TotalText from './TotalText'
import Footer from './session03/Footer'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  pressMe() {
    alert('OK')
  }

  render() {
    return (
      <View style={{ padding: 12 }}>
        <Header title="Hello" subtitle="Xin chao" />
        <Text> textInComponent </Text>
        <Header name="Good bye" />
        {/* <Button
          title="Press me"
          onPress={this.pressMe}
        /> */}
        <TextInput onChangeText={(text) => {
          this.setState({ text: text })
        }} />
        <Text style={{ fontSize: 30 }}>
          {this.state.text}
        </Text>
        <Button title="Login" color="red" />
        <Button title="Register" color="blue" />
        <Image
          source={{ uri: 'https://picsum.photos/458/354' }}
          style={{ width: '100%', height: 50 }}
        />

        <TotalText price={1000} quantity={1} discount={5} />
        <Footer />

      </View>
    )
  }
}
