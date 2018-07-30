import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const correctText = 'tooth';

const characters = [
  { id: 1, selectedId: 0, character: 't', fixed: true, status: 'on' },
  { id: 2, selectedId: 0, character: 'o', fixed: true, status: 'on' },
  { id: 3, selectedId: 0, character: '', fixed: false, status: 'off' },
  { id: 4, selectedId: 0, character: 't', fixed: true, status: 'on' },
  { id: 5, selectedId: 0, character: '', fixed: false, status: 'off' },
]

const alphabet = [
  { id: 1, character: 'a', status: 'on' },
  { id: 2, character: 'o', status: 'on' },
  { id: 3, character: 'f', status: 'on' },
  { id: 4, character: 't', status: 'on' },
  { id: 5, character: 'h', status: 'on' },
  { id: 6, character: 'u', status: 'on' },
  { id: 7, character: 'o', status: 'on' },
]

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      correctText: correctText,
      characters: characters,
      alphabet: alphabet
    }
  }

  removeCharacter(item) {
    if (item.fixed === false) {
      const characters = this.state.characters.slice();
      const index = characters.findIndex(x => (x.id === item.id));
      if (index >= 0) {
        // UPDATE ALPHABET
        const alphabet = this.state.alphabet.slice();
        const indexAlphabet = alphabet.findIndex(x => x.id === characters[index].selectedId);
        if (indexAlphabet >= 0) {
          alphabet[indexAlphabet].status = 'on';
          this.setState({ alphabet, alphabet });
        }

        // UPDATE CHARACTERS
        characters[index].status = 'off';
        characters[index].character = '';
        characters[index].selectedId = 0;
        this.setState({ characters, characters });
      }
    }
  }

  addCharacter(item) {
    if (this.state.characters.filter(x => x.character !== '').length === this.state.correctText.length) {
      return;
    }

    const alphabet = this.state.alphabet.slice();
    const indexAlphabet = alphabet.findIndex(x => x.id === item.id);
    if (indexAlphabet >= 0) {
      alphabet[indexAlphabet].status = 'off';
      this.setState({ alphabet, alphabet });


      var characters = this.state.characters.slice();
      const index = characters.findIndex(x => (x.status === 'off'));
      if (index >= 0) {
        characters[index].status = 'on';
        characters[index].character = item.character;
        characters[index].selectedId = item.id;
        this.setState({ characters, characters });
      }
    }
  }

  check() {
    var array = this.state.characters.map((item) => item.character);
    userString = array.join('');
    if (userString === this.state.correctText) {
      alert('Correct');
    } else {
      alert('Wrong');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            {
              this.state.characters.map((item, index) => (
                <TouchableOpacity key={index} style={[styles.button, { backgroundColor: item.fixed ? '#dfe6e9' : 'yellow' }]} onPress={() => {
                  this.removeCharacter(item);
                }}>
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
                <View key={index} style={item.status === 'off' ? {} : {}}>
                  <TouchableOpacity style={[styles.button, { backgroundColor: item.status === 'off' ? 'white' : 'yellow' }]} onPress={() => {
                    this.addCharacter(item);
                  }}>
                    <Text>
                      {item.character}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </View>
        <View style={{ flex: 0, height: 80 }}>
          {
            (this.state.characters.filter(x => x.character !== '').length === this.state.correctText.length) &&
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={{ backgroundColor: '#d63031', margin: 12, padding: 12 }} onPress={() => {
                this.check();
              }}>
                <Text style={{ color: 'white' }}>
                  Check
                </Text>
              </TouchableOpacity>
            </View>
          }
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
    borderWidth: 0,
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
