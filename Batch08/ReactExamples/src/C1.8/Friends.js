import React, { Component } from 'react';

import FriendAvatarClass from '../C1.4/FriendAvatarClass';

var friends = [
  { name: 'John', avatarUrl: 'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/119512811_10160347089269676_557847526290414018_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=D8zY675ItbEAX8cC6Mx&_nc_ht=scontent-xsp1-1.xx&oh=36be41b1c380ab72e8a4908bdb52aced&oe=5FD3CB49' },
  { name: 'John', avatarUrl: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/56300173_786290145084046_2843503757109493760_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=fYWCjDxn_wgAX83k4qq&_nc_ht=scontent.fhan3-2.fna&oh=750ad295082481df60233e5b131932c2&oe=5FD4658C' },
  { name: 'John', avatarUrl: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/56300173_786290145084046_2843503757109493760_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=fYWCjDxn_wgAX83k4qq&_nc_ht=scontent.fhan3-2.fna&oh=750ad295082481df60233e5b131932c2&oe=5FD4658C' },
];

export default class Friends extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        {friends.map((f, index) => {
          return <FriendAvatarClass key={'friend-' + index} borderWidth={4} name={f.name} avatarUrl={f.avatarUrl}></FriendAvatarClass>;
        })}
      </div>
    );
  }
}
