import React, { Component } from 'react';

// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
    };
  }

  render() {
    return (
      <div>
        <input
          style={{ width: 300, marginTop: 8, padding: 8, borderWidth: 1, borderStyle: 'solid', borderColor: '#555555', borderRadius: 4, fontSize: 14 }}
          onChange={(e) => {
            let text = toTitleCase(e.target.value);
            // console.log(text);
            this.setState({ fullname: text });
          }}
          value={this.state.fullname}
        ></input>
        <h2>{this.state.fullname}</h2>
      </div>
    );
  }
}
