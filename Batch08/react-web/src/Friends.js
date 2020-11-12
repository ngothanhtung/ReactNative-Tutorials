import React from 'react';
import FriendAvatar from './FriendAvatar';

export default function Friends() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FriendAvatar borderColor='yellow' borderWidth={0} avatarUrl='https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/119512811_10160347089269676_557847526290414018_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=D8zY675ItbEAX8cC6Mx&_nc_ht=scontent-xsp1-1.xx&oh=36be41b1c380ab72e8a4908bdb52aced&oe=5FD3CB49'></FriendAvatar>
      <FriendAvatar borderColor='green' borderWidth={1} avatarUrl='https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/56300173_786290145084046_2843503757109493760_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=fYWCjDxn_wgAX83k4qq&_nc_ht=scontent.fhan3-2.fna&oh=750ad295082481df60233e5b131932c2&oe=5FD4658C'></FriendAvatar>
      <FriendAvatar borderColor='green' borderWidth={1} avatarUrl='https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/109358839_927805984297720_181299315122447545_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=sKG77l45Y1MAX9N8ibu&_nc_ht=scontent.fhan3-2.fna&oh=906b36f68da0d6073172d3216acd2f3c&oe=5FD1CAE1'></FriendAvatar>
      <FriendAvatar borderColor='green' borderWidth={1} avatarUrl='https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/82830639_2677088292408194_5181566193638572032_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=VvmSIdmd4kYAX_9wod5&_nc_ht=scontent.fhan3-2.fna&oh=0ac5a0d1e9fd5e6aff906be701a1c540&oe=5FD0EF22'></FriendAvatar>
      <FriendAvatar borderColor='green' borderWidth={1} avatarUrl='https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/122889440_3516700785042695_4194849521649821332_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=mpujLXRkGO8AX9UoJu3&_nc_ht=scontent.fhan3-2.fna&oh=9958933130d8d9ae9bf7126789bc69ac&oe=5FD1285C'></FriendAvatar>
    </div>
  );
}
