import React, { Component } from 'react';

export default class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    return (
      <div style={{ width: 100, height: 100, borderColor: 'red', borderWidth: this.state.selected ? 1 : 0, borderRadius: 100, borderStyle: 'solid', padding: 2 }} onClick={() => {
        let s = this.state.selected;
        s = !s;
        this.setState({selected: s});
      }}>
        <img alt='' width='100%' style={{ borderRadius: 100 }} src={this.props.imageUrl} />
      </div>
    );
  }
}
