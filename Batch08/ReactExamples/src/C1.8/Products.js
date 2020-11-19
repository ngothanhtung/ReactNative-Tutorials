import React, { Component } from 'react';
import './Products.css';

class CircleButton extends Component {
  render() {
    return <div className='circle-button' style={{ backgroundColor: this.props.color, borderWidth: this.props.borderWidth }}></div>;
  }
}

class Product extends Component {
  render() {
    return (
      <div className='container'>
        <div className='image'></div>
        <div className='main'>
          <div>
            <strong>Kids Jumpsuit</strong>
          </div>
          <div className='product-price'>
            <div>
              <span className='price'>$39.00</span>
            </div>
            <div>
              <span>In stock</span>
            </div>
          </div>
          <div className='product-buttons'>
            <div>
              <CircleButton borderWidth={0} color='#7331c5' />
            </div>
            <div>
              <CircleButton borderWidth={1} color='#ffffff' />
            </div>
            <div>
              <CircleButton borderWidth={1} color='#ffffff' />
            </div>
            <div></div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default class Products extends Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#E54C66', height: 800, width: 800 }}>
        <Product></Product>
      </div>
    );
  }
}
