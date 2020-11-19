import React, { Component } from 'react';

const images = [
  { id: 1, caption: 'Mountain' },
  { id: 2, caption: 'Forest' },
  { id: 3, caption: 'Desert' },
];

export default function Gallery2() {
  // State in function
  const [state, setState] = React.useState({ index: 1 });

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div>
        <img alt='' style={{ width: 600 }} src={'/images/' + images[state.index].id + '.jpg'} />
      </div>
      <div style={{ display: 'flex' }}>
        {images.map((image, i) => {
          return (
            <div style={{ margin: 3, cursor: 'pointer' }}>
              <img
                alt=''
                style={{ width: 120 }}
                src={'/images/' + image.id + '.jpg'}
                onClick={() => {
                  setState({ index: i });
                }}
              />
            </div>
          );
        })}
      </div>
      <p>{images[state.index].caption}</p>
      <div></div>
    </div>
  );
}
