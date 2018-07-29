import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const characters = [
  { id: 1, character: 't', status: 'on' },
  { id: 2, character: 'o', status: 'on' },
  { id: 3, character: 'o', status: 'off' },
  { id: 4, character: 't', status: 'on' },
  { id: 5, character: 'h', status: 'on' },
]

const alphabet = [
  { id: 1, character: 'a', status: 'on' },
  { id: 2, character: 'o', status: 'on' },
  { id: 3, character: 'f', status: 'on' },
  { id: 4, character: 't', status: 'on' },
  { id: 5, character: 'h', status: 'on' },
]

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: characters,
      alphabet: alphabet
    }
  }

  removewCharacter(item) {

  }

  addCharacter(c) {
    console.log(c);
    var characters = this.state.characters.slice();
    const index = this.state.characters.findIndex(item => (item.character === c) && (item.status === 'off'));
    characters[index].status = 'on';
    this.setState({ characters, characters });
    // this.forceUpdate();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            {
              this.state.characters.map((item, index) => (
                <TouchableOpacity key={index} style={styles.button}>
                  <Text style={item.status === 'on' ? styles.visibleText : styles.invisibleText}>
                    {item.character}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
        <View style={{ flex: 0, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            {
              this.state.alphabet.map((item, index) => (
                <TouchableOpacity key={index} style={[styles.button, { backgroundColor: 'orange' }]} onPress={() => {
                  this.addCharacter(item.character);
                }}>
                  <Text style={item.status === 'on' ? styles.visibleText : styles.invisibleText}>
                    {item.character}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  button: {
    margin: 6,
    height: 40,
    width: 40,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },

  visibleText: {
    color: 'black'
  },

  invisibleText: {
    color: 'yellow'
  }
});
