import React, { Component } from 'react';

const images = [
  { id: 1, caption: 'Mountain' },
  { id: 2, caption: 'Forest' },
  { id: 3, caption: 'Desert' },
];

export default class GalleryClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div>
          <img alt='' style={{ width: 600 }} src={'/images/' + images[this.state.index].id + '.jpg'} />
        </div>
        <div style={{ display: 'flex' }}>
          {images.map((image, i) => {
            return (
              <div style={{ margin: 3 }}>
                <img
                  alt=''
                  style={{ width: 120 }}
                  src={'/images/' + image.id + '.jpg'}
                  onClick={() => {
                    this.setState({ index: i });
                  }}
                />
              </div>
            );
          })}
        </div>
        <p>{images[this.state.index].caption}</p>
        <div></div>
      </div>
    );
  }
}
