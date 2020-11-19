import React, { Component } from 'react';

export default class SelectInput extends Component {
  render() {
    return (
      <select
        style={{ width: 317, marginTop: 8, padding: 7, paddingLeft: 3, borderWidth: 1, borderStyle: 'solid', borderColor: '#555555', borderRadius: 4, fontSize: 14 }}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        <option selected value='grapefruit'>
          Grapefruit
        </option>
        <option value='lime'>Lime</option>
        <option value='coconut'>Coconut</option>
        <option value='mango'>Mango</option>
      </select>
    );
  }
}
