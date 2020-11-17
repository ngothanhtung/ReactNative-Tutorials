import React from 'react';

export default function FriendAvatar({ avatarUrl, borderColor, borderWidth, onClick }) {
  const click = () => {
    alert('OK in component');
    onClick();
  };

  return (
    <div style={{ margin: 8, borderWidth: borderWidth, borderColor: borderColor, borderStyle: 'solid', padding: 0, height: 84, width: 84, borderRadius: 42, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img onClick={click} style={{ width: 80, height: 80, borderRadius: 40 }} alt='Ngo Thanh Tung' src={avatarUrl} />
    </div>
  );
}
