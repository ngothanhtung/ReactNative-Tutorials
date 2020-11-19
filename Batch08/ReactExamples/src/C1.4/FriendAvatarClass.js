import React, { Component } from 'react';

export default class FriendAvatarClass extends Component {
  render() {
    return (
      <div
        style={{ margin: 8, borderWidth: this.props.borderWidth, borderColor: this.props.borderColor, borderStyle: 'solid', padding: 0, height: 84, width: 84, borderRadius: 42, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClick={() => {
          // to do ...
          // callback
          this.props.onClick();
        }}
      >
        <img style={{ width: 80, height: 80, borderRadius: 40 }} alt={this.props.name} src={this.props.avatarUrl} />
      </div>
    );
  }
}
